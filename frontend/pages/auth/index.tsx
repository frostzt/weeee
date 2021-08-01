import Head from 'next/head';
import { Fragment, useState, useContext } from 'react';

// Components
import { Toaster } from 'react-hot-toast';
import { LinkedButton } from '../../components/Button/Button';
import SignUpForm from '../../components/Auth/SignUpForm/SignUpForm';
import SignInForm from '../../components/Auth/SignInForm/SignInForm';

// Styles
import styles from './auth.module.scss';
import { useRouter } from 'next/dist/client/router';
import ClientOnly from '../../components/Utils/ClientOnly';
import AuthContext from '../../contexts/AuthContext/Auth.context';
import { useEffect } from 'react';

const AuthPage = () => {
  const [creatingAccount, setCreatingAccount] = useState(true);
  const { user } = useContext(AuthContext);

  const Router = useRouter();

  const switchContext = () => {
    setCreatingAccount((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (user) {
    Router.push('/account/dashboard');
  }

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
            switchHandler={switchContext}
          />
        ) : (
          <SignInForm
            creatingAccount={creatingAccount}
            switchHandler={switchContext}
          />
        )}
      </div>
    </Fragment>
  );
};

export default AuthPage;
