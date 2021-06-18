import React from "react";

// Styling
import styles from "../styles/About.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        What is <span className={styles.highlight}>Weeee?</span>
      </h1>
    </div>
  );
};

export default AboutPage;
