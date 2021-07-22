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
          <div className={styles.title}>Sign up</div>
        </div>
        <form className={styles.form}>
          <div className={styles.group}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.group}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AuthPage;
