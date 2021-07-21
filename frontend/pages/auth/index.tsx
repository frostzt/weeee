import Head from 'next/head';

// Styles
import styles from './auth.module.scss';

const AuthPage = () => {
  return (
    <>
      <Head>
        <title>Create an account</title>
        <meta name="description" content="Sign in or create an account" />
      </Head>
      <div className={styles.container}></div>
    </>
  );
};

export default AuthPage;
