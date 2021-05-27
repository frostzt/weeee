import Head from "next/head";
import { Fragment, useEffect } from "react";

// Styles and icons
import { motion, useAnimation } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import styles from "../styles/Home.module.scss";

// Components
import Logo from "../components/Logo/Logo";
import FeatureCard from "../components/FeatureCard/FeatureCard";

function Home() {
  const titles = ["team", "projects", "boards"];

  // Animations
  const headingControl = useAnimation();
  const subTitleControl = useAnimation();

  const sequence = async () => {
    await headingControl.start({ y: "-25%", x: "-50%", opacity: 1 });
    return await subTitleControl.start({ y: "-25%", x: "-50%", opacity: 1 });
  };

  useEffect(() => {
    sequence();
  }, []);

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
      <section className={styles.features}>
        <FeatureCard title="Title of feature" desc="Test description" />
      </section>
    </Fragment>
  );
}

export default Home;
