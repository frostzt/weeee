import Head from 'next/head';
import { Fragment, useState } from 'react';

// Components
import { LinkedButton } from '../../components/Button/Button';
import SignUpForm from '../../components/Auth/SignUpForm/SignUpForm';
import SignInForm from '../../components/Auth/SignInForm/SignInForm';

// Styles
import styles from './auth.module.scss';

// Interfaces
export interface SignUpProps {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const AuthPage = () => {
  const [creatingAccount, setCreatingAccount] = useState(true);

  const signUpHandler = (credentials: SignUpProps) => {
    const { name, username, email, password, confirmPassword } = credentials;

    // Verify if password match
    if (password !== confirmPassword) {
      console.log('passwords not same, to be done');
      return null;
    }
  };

  const signInHandler = () => {
    console.log('Sign In');
  };

  const switchContext = () => {
    setCreatingAccount((prevState) => !prevState);
    return;
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
          <div className={styles.title}>
            {creatingAccount ? 'Sign up' : 'Sign in'}
          </div>
        </div>
        {creatingAccount ? (
          <SignUpForm
            creatingAccount={creatingAccount}
            handler={signUpHandler}
            switchHandler={switchContext}
          />
        ) : (
          <SignInForm
            creatingAccount={creatingAccount}
            handler={signInHandler}
            switchHandler={switchContext}
          />
        )}
      </div>
    </Fragment>
  );
};

export default AuthPage;
