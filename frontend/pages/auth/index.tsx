import Head from 'next/head';
import { Fragment, useState } from 'react';

// Components
import toast, { Toaster } from 'react-hot-toast';
import { LinkedButton } from '../../components/Button/Button';
import SignUpForm from '../../components/Auth/SignUpForm/SignUpForm';
import SignInForm from '../../components/Auth/SignInForm/SignInForm';

// Styles
import styles from './auth.module.scss';
import ClientOnly from '../../components/Utils/ClientOnly';

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

  const signUpHandler = (e: Event, credentials: SignUpProps) => {
    e.preventDefault();
    const { name, username, email, password, confirmPassword } = credentials;

    // Verify if password match
    if (password !== confirmPassword) {
      toast.error('The passwords did not match!');
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
