"use client";

import Image from "next/image";
import { motion, px } from "framer-motion";
import { useMemo } from "react";
import styles from "./AcceduPage.module.css";
import ProjectNav from "@/components/projects/ProjectNav";
import BenchmarkSection from "./BenchmarkSection";

/** Fade in (comme Digilab) */
const FADE = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.45, once: false },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

function Blue({ children }: { children: React.ReactNode }) {
  return <span className={styles.blue}>{children}</span>;
}

function Green({ children }: { children: React.ReactNode }) {
  return <span className={styles.green}>{children}</span>;
}

/** Image “fiable” : maxW marche, car wrapper contraint + img width:100% */
function SizedImage({
  src,
  alt = "",
  maxW = 720,
  priority = false,
  className = "",
}: {
  src: string;
  alt?: string;
  maxW?: number;
  priority?: boolean;
  className?: string;
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

/** Bloc “label centré” style UX research (Digilab) */
function CenterLabel({ children }: { children: React.ReactNode }) {
  return <div className={styles.centerLabel}>{children}</div>;
}

export default function AcceduPage() {
  // NAV : adapte si tes routes sont /projets/... ou /projects/...
  const backHref = "/projets?focus=accedu";
  const prevHref = "/projets/digilab";
  const nextHref = "/projets/meteoradar";

  // réglages “taille images” (tu peux ajuster ici sans toucher au reste)
  const S = useMemo(
    () => ({
      hero: 760,
      besoin: 400,
      temoignage: 750,
      cadre: 400,
      veilleTitle: 420,
      experience: 760,
      accessibilite: 760,
      impact: 720,
      prototypage: 400,
      outils: 760,
      plugin: 860,
      luminance: 860,
      proto: 50,
    }),
    [],
  );

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
      <div className={styles.bigSpacerSmall} />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div {...FADE} className={styles.heroLeft}>
            <SizedImage
              src="/assets/projects/accedu/AcceduImage.png"
              maxW={S.hero}
              priority
            />
          </motion.div>

          <motion.div {...FADE} className={styles.heroRight}>
            <h1 className={styles.h1}>Accedu</h1>

            <div className={styles.intro}>
              <p className={styles.p}>
                Réalisé sur l’<Blue>année scolaire 2024/2025</Blue> et présenté
                en fin de Bachelor UI/UX (année 3). J’ai choisi de travailler
                sur
                <Blue> l’inclusion numérique</Blue> explorant les enjeux{" "}
                <Blue>d’accessibilité web avancée</Blue> et contraintes liées au
                handicap.
              </p>
              <p className={styles.p}>
                J’ai alors réalisé une{" "}
                <Blue>
                  plateforme de cours en ligne 100% accessible, adaptée
                </Blue>{" "}
                aux outils externes ainsi qu’à la navigation clavier.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Réflexion */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <CenterLabel>
            <h2 className={styles.h2}>Réflexion</h2>
          </CenterLabel>

          <div className={styles.bigSpacerSmall} />
          <div className={styles.problemInner}>
            Dans quelle mesure l’<Green>inclusion numérique</Green> des
            étudiants en situation de handicap reflète-t-elle les{" "}
            <Green>enjeux</Green> d’une{" "}
            <Green>société inclusive et équitable</Green> face à la transition
            numérique ?
          </div>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      <div className={styles.bigSpacer} />

      {/* Identification besoin (image seule) */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage
            src="/assets/projects/accedu/Besoin.png"
            maxW={S.besoin}
          />
        </motion.div>
      </section>
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Témoignage (image seule) */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage
            src="/assets/projects/accedu/Temoignage.png"
            maxW={S.temoignage}
          />
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Mesures et aides */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage src="/assets/projects/accedu/Mesures.png" maxW={700} />
          <div className={styles.bigSpacerSmall} />

          <div className={styles.mesuresList}>
            {/* 1 */}
            <div className={styles.mesureItem}>
              <div className={styles.mesureHeader}>
                <span className={styles.blueDot} aria-hidden />
                <div className={styles.mesureTitleRow}>
                  <span className={styles.mesureTitle}>RGAA</span>
                  <span className={styles.vBar} aria-hidden />
                  <span className={styles.mesureSub}>
                    WCAG adaptées aux juridictions FR
                  </span>
                </div>
              </div>

              <p className={styles.mesureText}>
                <span className={styles.bold}>
                  Evalue et garantit l’accessibilité
                </span>{" "}
                des contenus numériques. Autour de 13 thématiques, 106 critères
              </p>
            </div>

            {/* 2 */}
            <div className={styles.mesureItem}>
              <div className={styles.mesureHeader}>
                <span className={styles.blueDot} aria-hidden />
                <div className={styles.mesureTitleRow}>
                  <span className={styles.mesureTitle}>Décret n° 2023–931</span>
                  <span className={styles.vBar} aria-hidden />
                  <span className={styles.mesureSub}>9 octobre 2023</span>
                </div>
              </div>

              <p className={styles.mesureText}>
                Modalités de la directive européenne,{" "}
                <span className={styles.bold}>
                  précisant les obligations de conformité
                </span>{" "}
                pour les produits et services numériques.
              </p>
            </div>

            {/* 3 */}
            <div className={styles.mesureItem}>
              <div className={styles.mesureHeader}>
                <span className={styles.blueDot} aria-hidden />
                <div className={styles.mesureTitleRow}>
                  <span className={styles.mesureTitle}>Associations</span>
                  <span className={styles.vBar} aria-hidden />
                  <span className={styles.mesureSub}>
                    Financement de matériel
                  </span>
                </div>
              </div>

              <p className={styles.mesureText}>
                Associations fournissant du{" "}
                <span className={styles.bold}>matériel spécialisé</span> au cas
                par cas (outils externes)
              </p>

              <div className={styles.assosLogos}>
                <SizedImage
                  src="/assets/projects/accedu/HandicapImage.png"
                  maxW={260}
                />
                <SizedImage
                  src="/assets/projects/accedu/PCHImage.png"
                  maxW={400}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />

      <div className={styles.bigSpacer} />

      {/* Benchmark section (sticky + swap + background pan) */}
      <BenchmarkSection />

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Problématique (même DA que réflexion mais avec “frame” interne) */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <CenterLabel>
            <h2 className={styles.h2}>Problématique</h2>
          </CenterLabel>

          <div className={styles.bigSpacerSmall} />
          <div className={styles.problemInner}>
            Comment <Green>faciliter l’inclusion numérique</Green> des étudiants
            en situation de handicap ?
          </div>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <div style={{ height: 18 }} />
          <SizedImage src="/assets/projects/accedu/Cadre.png" maxW={S.cadre} />
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />

      <div className={styles.bigSpacer} />

      {/* Veille (titre image) + 3 blocs image gauche / texte droite */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage src="/assets/projects/accedu/Veille.png" maxW={400} />
        </motion.div>

        <div className={styles.bigSpacerSmall} />
        <div className={styles.bigSpacerSmall} />

        <motion.div {...FADE} className={styles.leftTextBlock}>
          <div className={styles.leftIllu}>
            <SizedImage src="/assets/projects/accedu/Marché.png" maxW={170} />
          </div>
          <div className={styles.veillesRight}>
            <h3 className={styles.veTitle}>Marché et opportunité</h3>

            <p className={styles.veP}>
              En France, 12 millions de personnes vivent avec un handicap :{" "}
              <span className={styles.veBlueBold}>
                1,5 million de déficients visuels.
              </span>
            </p>

            <p className={styles.veP}>
              Secteur de l’éducation en ligne en forte croissance :{" "}
              <span className={styles.veBlueBold}>
                +110 % d’utilisateurs depuis 2020
              </span>
            </p>

            <p className={styles.veSource}>Sources : Insee, OMS, Statista</p>
          </div>
        </motion.div>

        <div className={styles.blockGap} />
        <div className={styles.bigSpacerSmall} />

        <motion.div {...FADE} className={styles.leftTextBlock}>
          <div className={styles.leftIllu}>
            <SizedImage src="/assets/projects/accedu/Depenses.png" maxW={190} />
          </div>
          <div className={styles.veillesRight}>
            <h3 className={styles.veTitle}>Dépenses</h3>

            <p className={styles.veP}>
              Site accessible represente un{" "}
              <span className={styles.veBlueBold}>surcoût de 20%</span>
            </p>

            <p className={styles.veP}>
              Tests UX, intégrations conformes, outils spécifiques, maintenance
              et audits réguliers{" "}
              <span className={styles.veBlueBold}>
                +110 % d’utilisateurs depuis 2020
              </span>
            </p>

            <p className={styles.veSource}>
              Source : l’International Association of Accessibility
              Professionals
            </p>
          </div>
        </motion.div>

        <div className={styles.blockGap} />
        <div className={styles.bigSpacerSmall} />

        <motion.div {...FADE} className={styles.leftTextBlock}>
          <div className={styles.leftIllu}>
            <SizedImage src="/assets/projects/accedu/Etat.png" maxW={240} />
          </div>
          <div className={styles.veillesRight}>
            <h3 className={styles.veTitle}>Reconnaissance d’Etat</h3>

            <p className={styles.veP}>
              Peu de soutiens financiers si non reconnu comme{" "}
              <span className={styles.veBlueBold}>projet d’intérêt public</span>{" "}
              (sauf subventions potentielles)
            </p>

            <p className={styles.veP}>
              Potentiel d’impact sociétal, de valorisation éthique et de
              différenciation{" "}
            </p>
          </div>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacerSmall} />

      {/* Expérience (image) + 3 points numérotés */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage
            src="/assets/projects/accedu/Experience.png"
            maxW={S.experience}
          />
        </motion.div>

        <div className={styles.bigSpacerSmall} />

        <div className={styles.centerWrap}>
          <motion.div {...FADE} className={styles.expGrid}>
            {/* colonne gauche vide (comme maquette : marge/chiffres dans les colonnes) */}
            <div />

            {/* colonne droite : 3 colonnes */}
            <div className={styles.numCols3}>
              <div className={styles.numItem}>
                <div className={styles.numN}>1</div>
                <div>
                  <h3 className={styles.numTitle}>
                    Accès / dépot de ressources
                  </h3>
                  <p className={styles.numText}>
                    Textes, images compatibles avec lecteurs, vidéos, audios,
                    slides
                  </p>
                </div>
              </div>

              <div className={styles.numItem}>
                <div className={styles.numN}>2</div>
                <div>
                  <h3 className={styles.numTitle}>Cours en direct</h3>
                  <p className={styles.numText}>
                    Visio, transcription textuelle, documents, calendrier,
                    écoles / prof particulier
                  </p>
                </div>
              </div>

              <div className={styles.numItem}>
                <div className={styles.numN}>3</div>
                <div>
                  <h3 className={styles.numTitle}>Personnalisation</h3>
                  <p className={styles.numText}>
                    Daltonisme, exports format libre, taille de texte,
                    raccourcis clavier
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Accessibilité (image) + 3 points */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage
            src="/assets/projects/accedu/Accessibilite.png"
            maxW={700}
          />
        </motion.div>

        <div className={styles.bigSpacerSmall} />

        <div className={styles.centerWrap}>
          <motion.div {...FADE} className={styles.expGrid}>
            <div />

            <div className={styles.numCols4}>
              <div className={styles.numItem}>
                <div className={styles.numN}>1</div>
                <div>
                  <h3 className={styles.numTitle}>
                    Navigation claire / au clavier
                  </h3>
                  <p className={styles.numText}>
                    Marges, grilles, blocs sous forme de 3 colonnes maximum
                  </p>
                </div>
              </div>

              <div className={styles.numItem}>
                <div className={styles.numN}>2</div>
                <div>
                  <h3 className={styles.numTitle}>
                    Compatible avec lecteurs d’écran
                  </h3>
                  <p className={styles.numText}>
                    Images textuelles retranscriptibles, formats word/pdf
                  </p>
                </div>
              </div>

              <div className={styles.numItem}>
                <div className={styles.numN}>3</div>
                <div>
                  <h3 className={styles.numTitle}>
                    Lisible pour tous types de handicaps
                  </h3>
                  <p className={styles.numText}>
                    Daltonisme, basse vision, cécité, dyslexie
                  </p>
                </div>
              </div>

              <div className={styles.numItem}>
                <div className={styles.numN}>4</div>
                <div>
                  <h3 className={styles.numTitle}>Hiérarchie cohérente</h3>
                  <p className={styles.numText}>
                    Améliore la lisibilité. Ne pas dépendre exclusivement de la
                    couleur
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* 100Accessible + Impact */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage
            src="/assets/projects/accedu/100Accessible.png"
            maxW={650}
          />

          <h2 className={styles.h2}>
            Quel impact ? <span aria-hidden>✨ </span>
          </h2>

          <div className={styles.impactLines}>
            <div className={styles.mesureText}>
              <span className={styles.impactLead}>Étudiants :</span>{" "}
              <span>
                L’accessibilité, un levier de{" "}
                <span className={styles.blueSemi}>créativité et d’équité.</span>{" "}
                Gain d’autonomie, réduction des obstacles , accès simplifié.
              </span>
            </div>
            <div className={styles.mesureText}>
              <span className={styles.impactLead}>Établissements :</span>{" "}
              <span>
                meilleure conformité,{" "}
                <span className={styles.blueSemi}>
                  expérience unifiée, éthique et équitable.
                </span>
                <div className={styles.bigSpacerSmall} />
                <p className={styles.veSource}>
                  Designers : Rôle primordial dans la construction d’un
                  numérique équitable.
                </p>
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Prototypage */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage
            src="/assets/projects/accedu/Prototypage.png"
            maxW={S.prototypage}
          />
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Objectif (bloc à la manière Veille) */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.leftTextBlock}>
          <div className={styles.leftIllu}>
            <SizedImage src="/assets/projects/accedu/Objectif.png" maxW={280} />
          </div>
          <div className={styles.veillesRight}>
            <h3 className={styles.veTitle}>Objectif 🎯</h3>

            <p className={styles.veP}>
              Permettre de centraliser, partager et consulter des cours de
              manière fluide.{" "}
            </p>

            <p className={styles.veP}>
              De{" "}
              <span className={styles.veBlueBold}>s’adapter aux besoins</span>{" "}
              de chaque utilisateur.
            </p>

            <p className={styles.veP}>
              Montrer qu’un design accessible est aussi un design{" "}
              <span className={styles.veBlueBold}>intuitif et esthétique.</span>
            </p>
          </div>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Outils (image unique) */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage
            src="/assets/projects/accedu/Outils.png"
            maxW={S.outils}
          />
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Plugin (image gauche + texte droite) */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.leftTextBlock}>
          <div className={styles.leftIllu}>
            <SizedImage
              src="/assets/projects/accedu/PluginImage.png"
              maxW={360}
            />
          </div>
          <div className={styles.toolText}>
            <h3 className={styles.toolTitle}>Stark</h3>

            <p className={styles.toolP}>
              Outil permettant de vérifier des{" "}
              <span className={styles.veBlueBold}>contrastes</span> de couleur,
              tester l’accessibilité de{" "}
              <span className={styles.veBlueBold}>typographies</span> ou encore{" "}
              <span className={styles.veBlueBold}>
                simuler différents daltonismes
              </span>
            </p>

            <p className={styles.toolSource}>
              Contrast accessibility Checker - Plugin figma
            </p>
          </div>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Luminance */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage
            src="/assets/projects/accedu/LuminanceImage.png"
            maxW={S.luminance}
          />
          <div className={styles.bigSpacerSmall} />
          <div className={styles.toolText}>
            <h3 className={styles.toolTitle}>Luminance</h3>

            <p className={styles.toolP}>
              Utilisation d’outils tels que Leonardocolor permettant de créer
              des palettes de{" "}
              <span className={styles.veBlueBold}>
                couleur ayant la même luminance
              </span>{" "}
              (taux de gris)
            </p>

            <p className={styles.toolSource}>https://leonardocolor.io</p>
          </div>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />
      <div className={styles.bigSpacer} />

      {/* Vidéo proto + titre par dessus */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <div className={styles.videoWrap}>
            <video
              className={styles.video}
              src="/assets/projects/accedu/ProtoVideo.mp4"
              muted
              playsInline
              controls
              preload="metadata"
            />
            <div className={styles.videoTitle}>
              <SizedImage
                src="/assets/projects/accedu/Proto.png"
                maxW={250}
                className={styles.videoTitleImg}
              />
            </div>
          </div>
        </motion.div>
      </section>

      <div className={styles.bottomSpace} />
    </main>
  );
}
