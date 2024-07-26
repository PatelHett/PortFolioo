import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Het Patel</h1>
        <p className={styles.description}>
          Hello, I'm Full stack Developer with expertise in MERN and NextJs
        </p>
        <div>
        <a href="mailto:hetp1815@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a
          href="/path/to/your-cv.pdf"
          className={styles.contactBtn}
          download="Het_Patel_CV.pdf"
        >
          Download CV
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/Het_Image.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
