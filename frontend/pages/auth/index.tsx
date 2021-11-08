import React from 'react';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { useState, useContext } from 'react';
import { useRouter } from 'next/dist/client/router';
import AuthContext from '../../contexts/AuthContext/Auth.context';

// Components
import ClientOnly from '../../components/Utils/ClientOnly';
import { LinkedButton } from '../../components/Button/Button';
import SignUpForm from '../../components/Auth/SignUpForm/SignUpForm';
import SignInForm from '../../components/Auth/SignInForm/SignInForm';

// Styles
import styles from './auth.module.scss';
import { useMediaQuery } from 'react-responsive';

const AuthPage: React.FC = () => {
  const [creatingAccount, setCreatingAccount] = useState(true);
  const { user } = useContext(AuthContext);

  const Router = useRouter();

  // Media queries for rendering extra components
  const isDesktopCommonOrAbove = useMediaQuery({ minWidth: 1366 });

  const switchContext = () => {
    setCreatingAccount((prevState) => !prevState);
  };

  if (user) {
    Router.push('/account/dashboard');
  }

  return (
    <div className={styles.global}>
      <ClientOnly>
        <Toaster position="top-right" reverseOrder={true} />
      </ClientOnly>
      <Head>
        <title>Create an account</title>
        <meta name="description" content="Sign in or create an account" />
      </Head>
      <div className={styles.container}>
        <div className={styles.heading}>
          <LinkedButton override extraClass={styles.backbtn} link="/">
            {'<'}
          </LinkedButton>
          <div title="Signup or into your account!" className={styles.title}>
            {creatingAccount ? 'Sign up' : 'Sign in'}
          </div>
        </div>
        {creatingAccount ? (
          <SignUpForm creatingAccount={creatingAccount} switchHandler={switchContext} />
        ) : (
          <SignInForm creatingAccount={creatingAccount} switchHandler={switchContext} />
        )}
        <ClientOnly extraClasses={styles.bcontainer}>
          {isDesktopCommonOrAbove ? <div className={styles.bcontainer__board} /> : null}
        </ClientOnly>
      </div>
    </div>
  );
};

export default AuthPage;
