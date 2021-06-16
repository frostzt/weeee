import Head from "next/head";
import Link from "next/link";
import { Fragment, useEffect } from "react";

// Styles, icons
import cx from "classnames";
import styles from "../styles/Home.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Components
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import FeatureCard from "../components/FeatureCard/FeatureCard";

function Home() {
  const titles = ["team", "projects", "boards"];

  // Animations
  const headingControl = useAnimation();
  const subTitleControl = useAnimation();
  const cardsControl = useAnimation();

  // Monitor viewport of sections
  const { ref: featuresRef, inView: featuresInView } = useInView({ threshold: 0.25 });

  // Sequences
  const headerSequence = async () => {
    await headingControl.start({ y: "-25%", x: "-50%", opacity: 1 });
    return await subTitleControl.start({ y: "-25%", x: "-50%", opacity: 1 });
  };

  const featuresSequence = async () => {
    await cardsControl.start({ y: "0", opacity: 1 }, { duration: 0.5 });
  };

  useEffect(() => {
    headerSequence();
  }, []);

  useEffect(() => {
    if (featuresInView) {
      featuresSequence();
    }
  }, [featuresInView]);

  return (
    <Fragment>
      <Logo
        initial={{ x: "-500%" }}
        animate={{ x: "0" }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className={styles.logo}
      />
      <Head>
        <title>Weeee - Management made easier</title>
        <meta name="description" content="A simple application to manage your team, projects, and tasks." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <motion.h1
          initial={{ y: "20%", x: "-50%", opacity: 0 }}
          animate={headingControl}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className={styles.title}
        >
          Manage <div className={styles.change}>your {titles[0]}</div> easily!
        </motion.h1>
        <motion.sub initial={{ y: "20%", x: "-50%", opacity: 0 }} animate={subTitleControl} className={styles.subtitle}>
          Manage everything at one place
        </motion.sub>
        <div className={styles.godown}>
          <IoIosArrowDown className={styles.godown_icon} />
        </div>
      </header>
      <section ref={featuresRef} className={styles.features}>
        <motion.div initial={{ y: "20%", opacity: 0 }} animate={cardsControl} className={styles.cards}>
          <FeatureCard
            image="/images/svgs/teamwork.svg"
            heroUrl="/images/img/teamwork.png"
            title="Manage teams"
            desc="Managing team has never been easier. Now manage your entire team with just click of a few buttons."
            fullDesc="Managing team has never been easier. Now manage your entire team with just click of a few buttons. Add, edit, remove and do just whatever you want to with your team members working on a particular project! Apply specific roles to certain people to lead a team and get detailed review and reports from several teams working on different projects!"
            color="rgba(255, 131, 123, 1)"
          />
          <FeatureCard
            image="/images/svgs/projects.svg"
            heroUrl="/images/img/projects.png"
            title="Nail projects"
            desc="Create, delete, edit and do everything with your projects, assign teams and people to work on it, that's easy!"
            fullDesc="Create, delete, edit and do everything with your projects, assign teams and people to work on it, that's easy! Manage the start, progress, and completion of the projects. Assign teams to work on specific projects and allow them to provide you reports on what is being done and what is done!"
            color="rgba(255, 165, 2, 1)"
          />
          <FeatureCard
            image="/images/svgs/boards.svg"
            heroUrl="/images/img/boards.png"
            title="Create boards"
            desc="Wanna let everyone plan or know something? Or maybe you want your team to be more productive? Say no more!"
            fullDesc="Wanna let everyone plan or know something? Or maybe you want your team to be more productive? Say no more! Boards can not only help you stay creative but they take away the pain in writing a huge report or idea just to explain someone or a group of people. Boards can express ideas, content, and several others things much more creatively and easily!"
            color="rgba(30, 144, 255, 1)"
          />
        </motion.div>
        <Button extraClass={styles.btn}>Try it now!</Button>
      </section>
      <section className={styles.whywe}>
        <div className={styles.whywe__container}>
          <h2 className={styles.whywe__title}>
            But why <span className={styles.whywe__title_grad}>weeee?</span>
          </h2>
          <p className={styles.whywe__paragraph}>
            We provide you with complete control over the software after all you're the one using it. You can change it
            as you like and as it fits you. Which makes this open source software not only free but highly configurable.
            Not only that we are constantly working on bringing latest updates and developing new features as well.
          </p>
          <br />
          <p className={styles.whywe__paragraph}>
            But if you're wondering this is too good to be true! Naah! It is true you get everything for free however
            yes there is a catch! The application deployed here is for feature purposes and will not hold any data for
            long! Therefore hosting the app is upto you! We have tried our best to make sure that this application is as
            perfect and easy to use as possible with easy deployment and easy configuration!
          </p>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footer__floater}>
          <div className={cx([styles.footer__floater_content, styles.footer__floater_seen])}>
            Wanna see the the app repository and jump straight into how to deploy it?
          </div>
          <a
            className={cx([styles.footer__floater_content, styles.footer__floater_unseen])}
            href="https://github.com/frostzt/weeee"
            target="_blank"
          >
            <div>CLICK ME!</div>
          </a>
        </div>
        <div className={styles.footer__upper}>
          <div className={styles.footer__logo}>Weeee</div>
          <div className={styles.footer__links}>
            <div className={styles.footer__links_holder}>
              <Link href="/how-to-deploy">
                <div className={styles.footer__links_link}>How to deploy</div>
              </Link>
            </div>
            <div className={styles.footer__links_holder}>
              <Link href="/about">
                <div className={styles.footer__links_link}>About</div>
              </Link>
            </div>
            <div className={styles.footer__links_holder}>
              <a href="mailto:aidenfrostbite@gmail.com?subject=Important!" target="_blank">
                <div className={styles.footer__links_link}>Contact</div>
              </a>
            </div>
            <div className={styles.footer__links_holder}>
              <a href="https://frostzt.vercel.app" target="_blank">
                <div className={styles.footer__links_link}>Portfolio</div>
              </a>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "90%",
            margin: "0 auto",
            marginTop: "5rem",
          }}
        />
        <div className={styles.footer__lower}></div>
      </footer>
    </Fragment>
  );
}

export default Home;
