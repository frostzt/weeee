import React from 'react';

// Styling
import styles from '../styles/About.module.scss';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        What is <span className={styles.highlight}>Weeee?</span>
      </h1>
      <div className={styles.content}>
        Weeee is a platform where you can manage, create, and do everything with your projects, teams, and even your own organization!
        <br />
        <br />
        Yep that was the one-liner! Weeee is more of a personal side-project that I started, however I kept it open-source and made it
        sort of an application so that people can use it freely and even develop on top of it!
        <br />
        <br />
        It consists of everything that a team or an organization might need to manage things on their own. You don&apos;t have to purchase
        any subscription or even any software for that, weeee are here for you! This is quite easy to deploy and use, best part of weeee
        is that it is made for developers so that they can customize it with whatever feature they want!
        <br />
      </div>
    </div>
  );
};

export default AboutPage;
