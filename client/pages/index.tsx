import Head from "next/head";
import { Fragment, useState, useEffect } from "react";

// Styles and icons
import { IoIosArrowDown } from "react-icons/io";
import styles from "../styles/Home.module.scss";

// Components
import Logo from "../components/Logo/Logo";

export default function Home() {
  const titles = ["team", "projects", "boards"];

  return (
    <Fragment>
      <Logo className={styles.logo} />
      <Head>
        <title>Weeee - Management made easier</title>
        <meta
          name="description"
          content="A simple application to manage your team, projects, and tasks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Manage <div className={styles.change}>your {titles[0]}</div> easily!
        </h1>
        <sub className={styles.subtitle}>Manage everything at one place</sub>
        <div className={styles.godown}>
          <IoIosArrowDown className={styles.godown_icon} />
        </div>
      </header>
      <section className={styles.features}></section>
    </Fragment>
  );
}
