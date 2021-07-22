import Head from 'next/head';
import { Fragment } from 'react';
import { LinkedButton } from '../../components/Button/Button';

// Styles
import styles from './auth.module.scss';

const AuthPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Create an account</title>
        <meta name="description" content="Sign in or create an account" />
      </Head>
      <div className={styles.container}>
        <div className={styles.heading}>
          <LinkedButton override extraClass={styles.backbtn} link="/">
            {'<'}
          </LinkedButton>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthPage;
