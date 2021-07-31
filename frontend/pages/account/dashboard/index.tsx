import { useContext, useState, useEffect } from 'react';

import { GetServerSideProps } from 'next';
import styles from './dashboard.module.scss';

// Contexts
import AuthContext from '../../../contexts/AuthContext/Auth.context';
import { Button } from '../../../components/Button/Button';
import toast from 'react-hot-toast';
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication';

interface PageProps {}

const DashboardPage: React.FC<PageProps> = ({}) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);

  // Context
  const { signOut, user }: { signOut: any; user: any } =
    useContext(AuthContext);

  useEffect(() => {
    if (user && user.email && user.username) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [user]);

  // If loading
  if (loading) {
    return <h1 style={{ color: 'white' }}>Loading...</h1>;
  }

  return (
    <h1>
      <Button handler={signOut}>Logout</Button>
    </h1>
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
