"use client";

import Image from "next/image";
import styles from "./Contact.module.css";

export default function Contact() {
  const email = "alex.norholm@gmail.com";
  const phoneDisplay = "07 68 90 70 01";
  const phoneHref = "+33768907001";
  const linkedinHref = "https://www.linkedin.com/in/alex-n%C3%B8rholm";
  const linkedinLabel = "www.linkedin.com/in/alex-nørholm";

  return (
    <section className={styles.contactSection} aria-label="Contact">
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.column}>
        <a className={styles.pill} href={`mailto:${email}`}>
          <span className={styles.iconWrap} aria-hidden="true">
            <Image
              src="/assets/home/mailIcon.svg"
              alt=""
              width={22}
              height={22}
              className={styles.icon}
              draggable={false}
            />
          </span>
          <span className={styles.text}>{email}</span>
        </a>

        <a className={styles.pill} href={`tel:${phoneHref}`}>
          <span className={styles.iconWrap} aria-hidden="true">
            <Image
              src="/assets/home/iconsax-call.svg"
              alt=""
              width={22}
              height={22}
              className={styles.icon}
              draggable={false}
            />
          </span>
          <span className={styles.text}>{phoneDisplay}</span>
        </a>

        <a
          className={styles.pill}
          href={linkedinHref}
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.iconWrap} aria-hidden="true">
            <Image
              src="/assets/home/LinkedinIcon.svg"
              alt=""
              width={22}
              height={22}
              className={styles.linkedin}
              draggable={false}
            />
          </span>
          <span className={styles.textLink}>{linkedinLabel}</span>
        </a>
      </div>
    </section>
  );
}
