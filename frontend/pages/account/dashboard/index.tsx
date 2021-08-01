import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useContext, useState, useEffect, Fragment } from 'react';

// Styles
import styles from './dashboard.module.scss';

// Contexts
import AuthContext from '../../../contexts/AuthContext/Auth.context';
import { Button } from '../../../components/Button/Button';
import toast from 'react-hot-toast';
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication';
import { User } from '../../../interfaces/User.interface';

interface PageProps {}

interface AuthContextProps {
  signOut(): void;
  user: User | undefined;
}

const DashboardPage: React.FC<PageProps> = ({}) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);

  // Context
  const { signOut, user }: AuthContextProps = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [user]);

  console.log(user);

  // If loading
  if (loading) {
    return <h1 style={{ color: 'white' }}>Loading...</h1>;
  }

  return (
    <Fragment>
      <Head>
        <title>Dashboard - Weeee</title>
        <meta
          name="description"
          content="Weeee dashboard, manage everything at one place!"
        />
      </Head>
      <Button handler={signOut}>Logout</Button>
    </Fragment>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    return {
      props: {},
    };
  }
);
