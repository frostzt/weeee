import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weeee - Management made easier</title>
        <meta
          name="description"
          content="A simple application to manage your team, projects, and tasks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
