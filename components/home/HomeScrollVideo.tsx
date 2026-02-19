"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./HomeScrollVideo.module.css";
import WhoAmIReveal from "./WhoAmIReveal";
import Journey from "./Journey";
import Contact from "@/components/home/Contact";
import Image from "next/image";

type ChapterKey =
  | "hero"
  | "who"
  | "ai"
  | "collab"
  | "passions"
  | "culture"
  | "parcours_title"
  | "parcours_edna"
  | "parcours_digilab"
  | "parcours_lycee"
  | "parcours_rhinov"
  | "contact";

type Chapter = {
  key: ChapterKey;
  videoAt: number; // 0..1
};

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function getAbsTop(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  return r.top + window.scrollY;
}

export default function HomeScrollVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isHintVisible, setIsHintVisible] = useState(true);
  const [heroOpacity, setHeroOpacity] = useState(1);

  // WHO (local stage-driven)
  const whoStageRef = useRef<HTMLElement | null>(null);
  const [whoOpacity, setWhoOpacity] = useState(0);
  const [whoReveal, setWhoReveal] = useState(0);

  // PARCOURS title (local stage-driven)
  const parcoursStageRef = useRef<HTMLElement | null>(null);
  const [parcoursOpacity, setParcoursOpacity] = useState(0);
  const [parcoursReveal, setParcoursReveal] = useState(0);

  // Video scrub refs
  const targetTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);

  // Throttle (évite trop de seeks)
  const lastUpdateMsRef = useRef(0);
  const SCRUB_FPS = 60;
  const MIN_DT = 1000 / SCRUB_FPS;

  // ✅ IMPORTANT : on mappe la vidéo sur les POSITIONS RÉELLES des sections
  const [breakpoints, setBreakpoints] = useState<
    { key: ChapterKey; y: number; videoAt: number }[]
  >([]);

  const chapters: Chapter[] = useMemo(
    () => [
      { key: "hero", videoAt: 0.0 },
      { key: "who", videoAt: 0.08 },
      { key: "ai", videoAt: 0.12 },
      { key: "collab", videoAt: 0.26 },
      { key: "passions", videoAt: 0.33 },
      { key: "culture", videoAt: 0.46 },

      // parcours : un titre (ton "Mon parcours" gros) puis 4 étapes
      { key: "parcours_title", videoAt: 0.49 },
      { key: "parcours_edna", videoAt: 0.66 },
      { key: "parcours_digilab", videoAt: 0.77 },
      { key: "parcours_lycee", videoAt: 0.89 },
      { key: "parcours_rhinov", videoAt: 0.99 },

      { key: "contact", videoAt: 1.0 },
    ],
    [],
  );

  // progression locale d’une scène sticky (0..1)
  const stageProgress = (stageEl: HTMLElement) => {
    const rect = stageEl.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh;
    const end = -rect.height;
    const t = (start - rect.top) / (start - end);
    return clamp(t, 0, 1);
  };

  // ✅ construit les breakpoints sur la base des data-chapter réels
  useEffect(() => {
    const build = () => {
      const pts: { key: ChapterKey; y: number; videoAt: number }[] = [];

      for (const c of chapters) {
        const el = document.querySelector<HTMLElement>(
          `[data-chapter="${c.key}"]`,
        );
        if (!el) continue;

        // on prend une ancre “milieu de section” pour éviter l’effet “trop tôt”
        const top = getAbsTop(el);
        const h = el.offsetHeight || 1;
        const anchorY = top + h * 0.35; // 35% de la section

        pts.push({ key: c.key, y: anchorY, videoAt: c.videoAt });
      }

      // si jamais l’ordre DOM n’est pas strict, on trie par y
      pts.sort((a, b) => a.y - b.y);

      // sécurité : ajoute un point tout au début (0)
      if (pts.length) {
        const first = pts[0];
        pts[0] = { ...first, y: Math.max(0, first.y) };
      }

      setBreakpoints(pts);
    };

    build();
    window.addEventListener("resize", build);
    return () => window.removeEventListener("resize", build);
  }, [chapters]);

  const scrollYToVideoP = (scrollY: number) => {
    if (breakpoints.length < 2) return 0;

    // clamp dans l’intervalle
    const first = breakpoints[0];
    const last = breakpoints[breakpoints.length - 1];

    if (scrollY <= first.y) return first.videoAt;
    if (scrollY >= last.y) return last.videoAt;

    // trouve le segment
    for (let i = 0; i < breakpoints.length - 1; i++) {
      const a = breakpoints[i];
      const b = breakpoints[i + 1];

      if (scrollY >= a.y && scrollY <= b.y) {
        const t = (scrollY - a.y) / Math.max(1, b.y - a.y);
        return a.videoAt + (b.videoAt - a.videoAt) * t;
      }
    }

    return last.videoAt;
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let isReady = false;

    const setTime = (vid: HTMLVideoElement, t: number) => {
      if (typeof vid.fastSeek === "function") vid.fastSeek(t);
      else vid.currentTime = t;
    };

    const warmup = async () => {
      try {
        vidSetupForIOS(v);
        await v.play();
        v.pause();
      } catch {
        // ignore
      }
    };

    const tick = () => {
      const vid = videoRef.current;
      if (!vid) {
        rafRef.current = null;
        return;
      }

      const target = targetTimeRef.current;
      const current = vid.currentTime;
      const diff = target - current;

      if (Math.abs(diff) < 0.012) {
        setTime(vid, target);
        rafRef.current = null;
        return;
      }

      const abs = Math.abs(diff);
      const k = abs > 0.35 ? 0.65 : abs > 0.15 ? 0.42 : 0.22;

      setTime(vid, current + diff * k);
      rafRef.current = requestAnimationFrame(tick);
    };

    const computeTextAnimations = () => {
      const y = window.scrollY;
      setIsHintVisible(y <= 0);

      // HERO fade-out simple
      const vh = window.innerHeight || 1;
      const heroFade = clamp(y / (vh * 0.9), 0, 1);
      setHeroOpacity(1 - heroFade * heroFade);

      // WHO local
      if (whoStageRef.current) {
        const t = stageProgress(whoStageRef.current);

        const inO = smoothstep(0.08, 0.16, t);
        const outO = smoothstep(0.82, 0.98, t);
        setWhoOpacity(inO * (1 - outO));

        const reveal = clamp((t - 0.18) / 0.42, 0, 1);
        setWhoReveal(reveal);
      }

      // PARCOURS title local
      if (parcoursStageRef.current) {
        const t = stageProgress(parcoursStageRef.current);

        const inO = smoothstep(0.08, 0.16, t);
        const outO = smoothstep(0.82, 0.98, t);
        setParcoursOpacity(inO * (1 - outO));

        const reveal = clamp((t - 0.18) / 0.42, 0, 1);
        setParcoursReveal(reveal);
      }
    };

    const onScroll = () => {
      if (!isReady) return;

      const y = window.scrollY;

      const now = performance.now();
      if (now - lastUpdateMsRef.current < MIN_DT) return;
      lastUpdateMsRef.current = now;

      if (Math.abs(y - lastScrollYRef.current) < 1.5) return;
      lastScrollYRef.current = y;

      computeTextAnimations();

      // ✅ mapping vidéo basé sur les breakpoints DOM (plus de “ralenti chelou”)
      const videoP = scrollYToVideoP(y);

      const duration = v.duration || 1;
      const nextTime = clamp(
        videoP * duration,
        0,
        Math.max(duration - 0.001, 0),
      );
      targetTimeRef.current = nextTime;

      if (rafRef.current === null) rafRef.current = requestAnimationFrame(tick);
    };

    const onReady = async () => {
      isReady = true;
      computeTextAnimations();
      await warmup();
      onScroll();
    };

    v.addEventListener("loadedmetadata", onReady);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", computeTextAnimations);

    if (!Number.isNaN(v.duration) && v.duration > 0) onReady();

    return () => {
      v.removeEventListener("loadedmetadata", onReady);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", computeTextAnimations);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [breakpoints]);

  function vidSetupForIOS(v: HTMLVideoElement) {
    v.muted = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "true");
    v.setAttribute("webkit-playsinline", "true");
  }

  function useInViewClass<T extends HTMLElement>(
    options?: IntersectionObserverInit,
  ) {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    // ✅ si le fallback s’active, on “lock” l’affichage (on ne repasse plus à false)
    const forcedVisibleRef = useRef(false);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      // ✅ Fallback si l'observer existe mais ne déclenche jamais (cas PC du taf)
      const fallbackId = window.setTimeout(() => {
        forcedVisibleRef.current = true;
        setInView(true);
      }, 1500);

      // Si vraiment pas dispo -> visible direct
      if (!("IntersectionObserver" in window)) {
        forcedVisibleRef.current = true;
        setInView(true);
        window.clearTimeout(fallbackId);
        return;
      }

      const obs = new IntersectionObserver(([entry]) => {
        // si fallback a forcé -> on ignore les updates
        if (forcedVisibleRef.current) return;

        // ✅ comportement normal : in/out selon intersection
        setInView(entry.isIntersecting);

        // si au moins une fois on a eu un callback, on peut enlever le fallback timer
        window.clearTimeout(fallbackId);
      }, options);

      obs.observe(el);

      return () => {
        obs.disconnect();
        window.clearTimeout(fallbackId);
      };
    }, [options]);

    return { ref, inView };
  }

  function FadeSection({
    children,
    className,
    ...rest
  }: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
    const { ref, inView } = useInViewClass<HTMLElement>({
      threshold: 0.25,
      rootMargin: "-30% 0px -30% 0px",
    });

    return (
      <section
        ref={ref}
        className={`${className ?? ""} ${inView ? styles.in : styles.out}`}
        {...rest}
      >
        {children}
      </section>
    );
  }

  const scrollToContact = () => {
    const el = document.querySelector<HTMLElement>('[data-chapter="contact"]');
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        {/* HERO */}
        <section
          className={styles.hero}
          data-chapter="hero"
          style={{ opacity: heroOpacity }}
        >
          <div className={styles.heroInner}>
            <h1 className={styles.title}>Alex Nørholm Designer UI/UX</h1>
            <p className={styles.subtitle}>
              Création d’interfaces web{" "}
              <span className={styles.blue}>intuitives</span> et{" "}
              <span className={styles.blue}>ergonomiques</span>
            </p>
            <button
              type="button"
              onClick={scrollToContact}
              className={styles.contactCta}
              aria-label="Aller à la section contact"
            >
              <span className={styles.blueContact}>Contact</span>
              <Image
                src="/assets/home/Fleche.svg"
                alt=""
                width={16}
                height={16}
                className={styles.contactArrow}
                draggable={false}
              />
            </button>
          </div>

          {isHintVisible ? (
            <p className={styles.scrollHint}>
              Scroll pour découvrir mon univers
            </p>
          ) : null}
        </section>

        {/* QUI SUIS-JE */}
        <section
          ref={whoStageRef}
          className={styles.stickyStage}
          data-chapter="who"
        >
          <div className={styles.stickyInner} style={{ opacity: whoOpacity }}>
            <WhoAmIReveal
              progress={whoReveal}
              words={["Qui s", "uis-je", "?"]}
              ariaLabel="Qui suis-je"
            />
          </div>
        </section>

        <div className={styles.bigSpacer} />

        <FadeSection className={styles.block} data-chapter="ai">
          <h2 className={styles.h2WithIcon}>
            IA et animation 2D/3D
            <Image
              src="/assets/home/iconsax-ruler-pen.svg"
              alt=""
              width={22}
              height={22}
              className={styles.h2Icon}
              draggable={false}
            />
          </h2>
          <p className={styles.p}>
            J’ai développé un intéret pour l’animation sur{" "}
            <span className={styles.blue}>Blender, After effect.</span>{" "}
            J’affectionne aussi le secteur de l’
            <span className={styles.blue}>IA sous plusieurs formes</span>{" "}
            réalisant des veilles constamment.
          </p>
          <Image
            src="/assets/home/Tools.png"
            alt=""
            width={520}
            height={90}
            className={styles.inlineMedia}
            draggable={false}
          />
        </FadeSection>

        <div className={styles.bigSpacer} />

        <FadeSection className={styles.block} data-chapter="collab">
          <h2 className={styles.h2WithIcon}>
            Collaborations
            <Image
              src="/assets/home/PeopleIcon.svg"
              alt=""
              width={22}
              height={22}
              className={styles.h2Icon}
              draggable={false}
            />
          </h2>

          <p className={styles.p}>
            J’ai eu la chance de travailler avec de nombreuses entreprises
            durant mon cursus Bachelor UI/UX à{" "}
            <span className={styles.blue}>
              l’Ecole de Design Nantes Atlantiques.
            </span>
          </p>
          <p className={styles.p}>
            J’ai aussi réalisé plusieurs missions en Freelance. Ces expériences
            <span className={styles.blue}>
              {" "}
              ont façoné mon approche professionnelle et mes aptitudes.
            </span>
          </p>

          <Image
            src="/assets/home/LogosCollab2.png"
            alt=""
            width={560}
            height={130}
            className={styles.inlineMedia}
            draggable={false}
          />
        </FadeSection>

        <div className={styles.bigSpacer} />

        <FadeSection className={styles.block} data-chapter="passions">
          <h2 className={styles.h2WithIcon}>
            Passions
            <Image
              src="/assets/home/Passions.svg"
              alt=""
              width={22}
              height={22}
              className={styles.h2Icon}
              draggable={false}
            />
          </h2>

          <p className={styles.p}>
            <span className={styles.blue}>Passionné de tennis</span>, j’ai joué
            en club pendant 16 ans. J’ai aussi développé très jeune une{" "}
            <span className={styles.blue}>passion pour le modélisme</span>{" "}
            réalisant de nombreuses maquettes et activités manuelles
          </p>
        </FadeSection>

        <div className={styles.bigSpacer} />
        <div className={styles.bigSpacer} />

        <FadeSection className={styles.block} data-chapter="culture">
          <h2 className={styles.h2WithIcon}>
            Double nationalité
            <Image
              src="/assets/home/iconsax-language-square.svg"
              alt=""
              width={22}
              height={22}
              className={styles.h2Icon}
              draggable={false}
            />
          </h2>

          <p className={styles.p}>
            Ma double{" "}
            <span className={styles.blue}>nationalité Franco-Danoise</span> a
            toujours nourri ma créativité, ma curiosité et donné un{" "}
            <span className={styles.blue}>attrait pour le Design.</span>
          </p>
        </FadeSection>

        <div className={styles.bigSpacer} />

        {/* PARCOURS */}
        <section className={styles.block}>
          {/* titre sticky gros */}
          <section
            ref={parcoursStageRef}
            className={styles.stickyStage}
            data-chapter="parcours_title"
          >
            <div
              className={styles.stickyInner}
              style={{ opacity: parcoursOpacity }}
            >
              <WhoAmIReveal
                progress={parcoursReveal}
                words={["Mon", "parcours"]}
                ariaLabel="Mon parcours"
              />
            </div>
          </section>

          {/* contenu parcours (avec 4 sous-chapitres data-chapter dans Journey.tsx) */}
          <Journey />
        </section>

        <div className={styles.bigSpacer} />

        <FadeSection className={styles.block} data-chapter="contact">
          <Contact />
        </FadeSection>

        <div className={styles.bigSpacer} />
      </div>

      <div className={styles.right}>
        <div className={styles.videoFrame}>
          <div className={styles.videoShell}>
            <video
              ref={videoRef}
              className={styles.video}
              src="/assets/home/BackgroundVideoHome_1_scrub.mp4"
              muted
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
            />
          </div>
        </div>
      </div>
    </div>
  );
}
