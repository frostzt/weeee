import React from "react";

// Styling
import styles from "../styles/About.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        What is <span className={styles.highlight}>Weeee?</span>
      </h1>
      <div className={styles.content}>
        Weeee is a platform where you can manage, create, and do everything with
        your projects, teams, and even your own organization!
        <br />
        <br />
        Yep that was the one-liner! Weeee is more of a personal side-project
        that I started, however I kept it open-source and made it sort of an
        application so that people can use it freely and even develop on top of
        it!
        <br />
        <br />
        It consists of everything that a team or an organization might need to
        manage things on their own. You don't have to purchase any subscription
        or even any software for that, weeee are here for you! This is quite
        easy to deploy and use, best part of weeee is that it is made for
        developers so that they can customize it with whatever feature they
        want!
        <br />
        <br />
        So in a nutshell this thing that you're seeing here is not a application
        that you can use, you will need to deploy it and then it is ready for
        production! Now don't get me wrong the reason why I haven't deployed it
        is because the costs would get too much and I don't really think I would
        be able to handle it out!
      </div>
    </div>
  );
};

export default AboutPage;
