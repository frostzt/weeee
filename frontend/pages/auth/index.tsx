import Head from 'next/head';
import { Fragment } from 'react';
import { Button, LinkedButton } from '../../components/Button/Button';

// Styles
import styles from './auth.module.scss';

const AuthPage = () => {
  const signUpHandler = () => {
    console.log('Clicked');
  };

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
            <label className={styles.group__label} htmlFor="name">
              Name
            </label>
            <input className={styles.group__input} type="text" name="name" />
          </div>
          <div className={styles.group}>
            <label className={styles.group__label} htmlFor="email">
              Email
            </label>
            <input className={styles.group__input} type="email" name="email" />
          </div>
          <div className={styles.group}>
            <label className={styles.group__label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.group__input}
              type="password"
              name="password"
            />
          </div>
          <div className={styles.group}>
            <label className={styles.group__label} htmlFor="cpassword">
              Confirm Password
            </label>
            <input
              className={styles.group__input}
              type="password"
              name="cpassword"
            />
          </div>
          <div className={styles.btns}>
            <Button extraClass={styles.signup} handler={signUpHandler}>
              Sign Up
            </Button>
            <div className={styles.switch}>
              Already have an account? Sign in here and lets get to work asap!
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AuthPage;
