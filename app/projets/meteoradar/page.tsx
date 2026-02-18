"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import styles from "./MeteoRadarPage.module.css";
import ProjectNav from "@/components/projects/ProjectNav";

/** -----------------------------
 *  Fade in controls (global)
 *  ----------------------------- */
const FADE = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.35, once: false },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

/** Blue helper */
function Blue({ children }: { children: React.ReactNode }) {
  return <span className={styles.blue}>{children}</span>;
}

/** -----------------------------
 *  SizedImage (maxWidth fiable)
 *  -> tu contrôles maxW image par image
 *  ----------------------------- */
function SizedImage({
  src,
  alt = "",
  maxW = 720,
  className = "",
  priority = false,
}: {
  src: string;
  alt?: string;
  maxW?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`${styles.sizedWrap} ${className}`}
      style={{ maxWidth: maxW }}
    >
      <Image
        src={src}
        alt={alt}
        width={2200}
        height={1400}
        className={styles.sizedImg}
        draggable={false}
        priority={priority}
      />
    </div>
  );
}

function LabelBox({ children }: { children: React.ReactNode }) {
  return <div className={styles.labelBox}>{children}</div>;
}

function SmallInfoPill({ children }: { children: React.ReactNode }) {
  return <span className={styles.smallInfoPill}>{children}</span>;
}

/** 2 colonnes centrées */
function CenterWrap({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={wide ? styles.centerWrapWide : styles.centerWrap}>
      {children}
    </div>
  );
}

/** bloc “expérience/accessibilité” (col 1 = pastille ronde / col 2 = titre + texte) */
function RoundCard({
  iconSrc,
  title,
  text,
}: {
  iconSrc: string; // ex Rond.png
  title: string;
  text: React.ReactNode; // ✅ au lieu de string
}) {
  return (
    <div className={styles.roundCard}>
      <div className={styles.roundIconWrap}>
        <Image
          src={iconSrc}
          alt=""
          width={46}
          height={46}
          className={styles.roundIcon}
          draggable={false}
        />
      </div>

      <div>
        <div className={styles.roundTitle}>{title}</div>
        <div className={styles.roundText}>{text}</div>
      </div>
    </div>
  );
}

/** 3 colonnes “benchmark” (widget + bloc “num-like” en dessous) */
function BenchmarkCard({
  n,
  img,
  title,
  body,
}: {
  n: number;
  img: string;
  title: string;
  body?: React.ReactNode;
}) {
  return (
    <div className={styles.benchCard}>
      <div className={styles.benchImgWrap}>
        <Image
          src={img}
          alt={title}
          width={900}
          height={900}
          className={styles.benchImg}
          draggable={false}
        />
      </div>

      <div className={styles.benchCaption}>
        <span className={styles.benchN}>{n}</span>
        <div className={styles.benchText}>
          <div className={styles.benchTitle}>{title}</div>
          {body ? <div className={styles.benchBody}>{body}</div> : null}
        </div>
      </div>
    </div>
  );
}

export default function MeteoRadarPage() {
  // NAV
  const backHref = "/projets?focus=meteoradar"; // adapte si tes routes sont /projets/... ou /projects/...
  const prevHref = "/projets/accedu";
  const nextHref = "/projets/designsystem"; // adapte si ton ordre est différent

  return (
    <main className={styles.page}>
      <ProjectNav
        backHref={backHref}
        prevHref={prevHref}
        nextHref={nextHref}
        nextLabel="Projet suivant"
      />
      <div className={styles.topSpacer} />

      {/* HERO */}
      <div className={styles.midSpacer} />
      <div className={styles.midSpacer} />
      <div className={styles.midSpacer} />
      <section className={styles.hero}>
        <CenterWrap wide>
          <div className={styles.heroInner}>
            <motion.div className={styles.heroLeft} {...FADE}>
              <SizedImage
                src="/assets/projects/meteoradar/HeroImage.png"
                maxW={500}
                priority
              />
            </motion.div>

            <motion.div className={styles.heroRight} {...FADE}>
              <h1 className={styles.h1}>Météo Radar</h1>

              <div className={styles.intro}>
                <p className={styles.p}>
                  Dans le cadre d&apos;un cours d&apos;audit, nous avons réalisé
                  un <Blue>audit complet</Blue> en conditions professionnelles
                  nous mettant à la place d&apos;une{" "}
                  <Blue>agence de design fictive</Blue>.
                </p>

                <p className={styles.p}>
                  Nous avons créé l’agence <Blue>Squirrel</Blue> et réalisé un
                  audit de l&apos;application <Blue>Météo Radar</Blue>.
                </p>
              </div>
            </motion.div>
          </div>
        </CenterWrap>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Meteo image + positifs/négatifs */}
      <section className={styles.section}>
        <CenterWrap wide>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/meteoradar/Meteo.png"
              maxW={500}
            />
          </motion.div>

          <div className={styles.midSpacer} />

          {/* ✅ grille centrée + 2 colonnes centrées */}
          <motion.div {...FADE} className={styles.ppWrap}>
            <div className={styles.ppGrid}>
              {/* COL 1 */}
              <div className={styles.ppItem}>
                <div className={styles.ppDot}>
                  <SizedImage
                    src="/assets/projects/meteoradar/Pastilleb.svg"
                    maxW={20}
                    priority
                  />
                </div>

                <div className={styles.ppContent}>
                  <h3 className={styles.ppTitle}>Points positifs</h3>

                  <p className={styles.ppText}>
                    Révisions météo{" "}
                    <span className={styles.bold}>heure par heure</span> et sur{" "}
                    <span className={styles.bold}>14 jours</span>, radar météo
                    interactif
                  </p>

                  <p className={styles.ppText}>
                    <span className={styles.bold}>Diversité :</span> Alertes
                    météo (conditions extrêmes), qualité de l’air, UV, pollen
                  </p>
                </div>
              </div>

              {/* COL 2 */}
              <div className={styles.ppItem}>
                <div className={styles.ppDot}>
                  <SizedImage
                    src="/assets/projects/meteoradar/PastilleR.svg"
                    maxW={20}
                    priority
                  />
                </div>

                <div className={styles.ppContent}>
                  <h3 className={styles.ppTitle}>Points négatifs</h3>

                  <p className={styles.ppText}>
                    Version{" "}
                    <span className={styles.bold}>gratuite avec pubs</span>{" "}
                    (Premium ne sert qu’à retirer les publicités)
                  </p>

                  <p className={styles.ppText}>
                    Mauvaise{" "}
                    <span className={styles.bold}>
                      accessibilité et hiérarchie
                    </span>{" "}
                    de l’information
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </CenterWrap>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Pub section */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage src="/assets/projects/meteoradar/Pub.png" maxW={400} />
        </motion.div>
        <div className={styles.bigSpacer} />
        <CenterWrap wide>
          <motion.div {...FADE} className={styles.leftTextBlock}>
            <div className={styles.leftIllu}>
              <SizedImage
                src="/assets/projects/meteoradar/AdImage.png"
                maxW={500}
              />
            </div>
            <div className={styles.veillesRight}>
              <h3 className={styles.veTitle}>Retours utilisateurs</h3>

              <p className={styles.veP}>
                Concernent majoritairement la quantité de pubs. MétéoRadar
                cumule cependant{" "}
                <span className={styles.veBlueBold}>1M d’utilisateurs.</span>{" "}
                Fidélité pourtant présente grâce à un parti pris sur 14 jours,
                necessaires pour certains professionnels.
              </p>
              <div className={styles.smallSpacer} />
              <div className={styles.pubArrowLine}>
                <Image
                  src="/assets/projects/meteoradar/Right.svg"
                  alt=""
                  width={24}
                  height={24}
                  draggable={false}
                />
                <div className={styles.boldLine}>
                  Réduire l’intrusion publicitaire pour préserver la lecture et
                  la confiance.
                </div>
              </div>
            </div>
          </motion.div>
        </CenterWrap>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Persona */}
      <section className={styles.section}>
        <CenterWrap wide>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/meteoradar/PersonaImage.png"
              maxW={120}
            />
          </motion.div>

          <div className={styles.midSpacer} />

          <motion.div {...FADE} className={styles.center}>
            <div className={styles.titleImgWrap}>
              <SizedImage
                src="/assets/projects/meteoradar/Persona.png"
                maxW={220}
              />
            </div>
            <div className={styles.midSpacer} />

            <h2 className={styles.personaName}>François-Frabrice</h2>

            <div className={styles.personaMeta}>
              <SmallInfoPill>Artisan Carreleur</SmallInfoPill>
              <SmallInfoPill>33 ans</SmallInfoPill>
              <SmallInfoPill>Bretagne</SmallInfoPill>
            </div>
          </motion.div>

          <div className={styles.midSpacer} />
          <div className={styles.midSpacer} />

          <motion.div {...FADE} className={styles.leftTextBlock}>
            <div className={styles.leftIllu}>
              <SizedImage
                src="/assets/projects/meteoradar/acces.png"
                maxW={300}
              />
            </div>
            <div className={styles.veillesRight}>
              <h3 className={styles.veTitle}>Objectif</h3>

              <p className={styles.veP}>
                François-Fabrice veut une application juste dans ses prévisions
                et au <span className={styles.veBlueBold}>long terme</span> afin
                de gérer ses travaux, avec moins de charge visuelle et de
                publicités qui nuisent à son expérience.{" "}
              </p>
            </div>
          </motion.div>
        </CenterWrap>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Heuristiques */}
      <section className={styles.section}>
        <CenterWrap wide>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/meteoradar/Heuristiques.png"
              maxW={600}
            />
          </motion.div>

          <div className={styles.smallSpacer} />
          <div className={styles.bigSpacer} />

          <motion.div {...FADE} className={styles.leftTextBlock}>
            <div className={styles.leftIllu}>
              <SizedImage
                src="/assets/projects/meteoradar/Scan.png"
                maxW={150}
              />
            </div>
            <div className={styles.veillesRight}>
              <h3 className={styles.veTitle}>Notre objectif</h3>

              <p className={styles.veP}>
                Obtenir le maximum de taux de conversion{" "}
                <span className={styles.veBlueBold}>
                  sans surcharger l’app de publicités
                </span>
              </p>
            </div>
          </motion.div>
        </CenterWrap>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Benchmark */}
      <section className={styles.section}>
        <CenterWrap wide>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/meteoradar/Benchmark.png"
              maxW={550}
            />

            <div className={styles.bigSpacer} />

            <motion.div {...FADE} className={styles.benchGrid}>
              <BenchmarkCard
                n={1}
                img="/assets/projects/meteoradar/AppleImage.png"
                title="Apple"
              />
              <BenchmarkCard
                n={2}
                img="/assets/projects/meteoradar/MeteoFranceImage.png"
                title="Météo France"
              />
              <BenchmarkCard
                n={3}
                img="/assets/projects/meteoradar/MeteoImage3.png"
                title="Météo Radar"
                body={
                  <>
                    Widget non pertinent sur Météo Radar{" "}
                    <span className={styles.benchStrong}>
                      (aperçu : uniquement du temps réel)
                    </span>
                  </>
                }
              />
            </motion.div>
          </motion.div>
        </CenterWrap>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Recommandations */}
      <section className={styles.section}>
        <CenterWrap wide>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/meteoradar/Recommandations.png"
              maxW={370}
            />
          </motion.div>

          <div className={styles.bigSpacer} />

          <motion.div {...FADE} className={styles.leftTextBlock}>
            <div className={styles.leftIllu}>
              <SizedImage
                src="/assets/projects/meteoradar/money.png"
                maxW={200}
              />
            </div>
            <div className={styles.veillesRight}>
              <h3 className={styles.veTitle}>
                Approche différente du plan payant
              </h3>

              <p className={styles.veP}>
                Mise en avant du plan payant, couvrant un espace anciennement
                dédié aux publicités. UserFlow :{" "}
                <span className={styles.veBlueBold}>
                  Options payantes sur l’accueil
                </span>
              </p>

              <p className={styles.veP}>
                Permettre l’accès{" "}
                <span className={styles.veBlueBold}>
                  aux points forts de météo radar via le plan payant
                </span>{" "}
                avec 7 jours gratuits et 14 jours payants
              </p>
            </div>
          </motion.div>

          <div className={styles.bigSpacer} />
          <div className={styles.bigSpacer} />
          <div className={styles.bigSpacer} />

          <motion.div {...FADE} className={styles.threeCols}>
            <div className={styles.colCard}>
              <SizedImage
                src="/assets/projects/meteoradar/timer.png"
                maxW={145}
              />
              <div className={styles.colCardSpacer} />
              <LabelBox>90 min</LabelBox>
              <div className={styles.colCardText}>Détail météo</div>
            </div>

            <div className={styles.colCard}>
              <SizedImage
                src="/assets/projects/meteoradar/attention.png"
                maxW={145}
              />
              <div className={styles.colCardSpacer} />
              <LabelBox>Pub</LabelBox>
              <div className={styles.colCardText}>Pas de pub</div>
            </div>

            <div className={styles.colCard}>
              <SizedImage
                src="/assets/projects/meteoradar/wid.png"
                maxW={145}
              />
              <div className={styles.colCardSpacer} />
              <LabelBox>Widget</LabelBox>
              <div className={styles.colCardText}>widgets personnalisables</div>
            </div>
          </motion.div>
        </CenterWrap>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Model */}
      <section className={styles.section}>
        <CenterWrap wide>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/meteoradar/model.png"
              maxW={400}
            />
          </motion.div>

          <div className={styles.midSpacer} />

          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/meteoradar/Graph.png"
              maxW={750}
            />
          </motion.div>

          <div className={styles.midSpacer} />

          <motion.div {...FADE} className={styles.modelTwoCols}>
            <div className={styles.modelCol}>
              <RoundCard
                iconSrc="/assets/projects/meteoradar/Rond.svg"
                title="Modèle Abonnement 2€"
                text={
                  <>
                    1% → 20&nbsp;000€ <br />
                    2% → 40&nbsp;000€ <br />
                    <span className={styles.blueBold}>
                      5% → 100&nbsp;000€
                    </span>{" "}
                    <br />
                    10% → 200&nbsp;000€ <br />
                    <br />
                    L’abonnement devient{" "}
                    <span className={styles.bold}>plus rentable</span>
                    <br />
                    que la publicité{" "}
                    <span className={styles.bold}>au dessus de 5%</span> de
                    <br />
                    conversion
                  </>
                }
              />
            </div>

            <div className={styles.modelCol}>
              <RoundCard
                iconSrc="/assets/projects/meteoradar/Rond.svg"
                title="Modèle Publicitaire"
                text={
                  <>
                    <span className={styles.bold}>1M</span> d’utilisateurs
                    actifs mensuels
                    <br />
                    Revenus par utilisateurs :{" "}
                    <span className={styles.bold}>0,10€</span>
                    <br />
                    Total mensuel :{" "}
                    <span className={styles.blueBold}>100&nbsp;000€</span>
                  </>
                }
              />
            </div>
          </motion.div>
        </CenterWrap>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.midSpacer} />

      {/* Rendu final */}
      <section className={styles.section}>
        <CenterWrap wide>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/meteoradar/ImageProto.png"
              maxW={780}
            />
          </motion.div>
        </CenterWrap>
      </section>

      <div className={styles.bottomSpace} />
    </main>
  );
}
