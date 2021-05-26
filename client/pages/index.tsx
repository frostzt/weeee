import Head from "next/head";
import { Fragment } from "react";

// Styles
import styles from "../styles/Home.module.scss";

// Components
import Logo from "../components/Logo/Logo";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Weeee - Management made easier</title>
        <meta
          name="description"
          content="A simple application to manage your team, projects, and tasks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Logo />
      </header>
    </Fragment>
  );
}
