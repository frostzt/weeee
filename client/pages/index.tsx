import Head from "next/head";
import { Fragment } from "react";

// Styles
import styles from "../styles/Home.module.scss";

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
        <div className={styles.logo}>
          <i>W</i>
        </div>
      </header>
    </Fragment>
  );
}
