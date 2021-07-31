import { decode } from 'jsonwebtoken';
import { useContext, useState, useEffect } from 'react';

import { GetServerSideProps } from 'next';
import styles from './dashboard.module.scss';

// Contexts
import AuthContext from '../../../contexts/AuthContext/Auth.context';
import { Button } from '../../../components/Button/Button';
import { useRouter } from 'next/dist/client/router';
import toast from 'react-hot-toast';

interface PageProps {
  email: string;
}

const DashboardPage: React.FC<PageProps> = ({ email }) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);

  const Router = useRouter();

  // Context
  const { signOut, user }: { signOut: any; user: any } =
    useContext(AuthContext);

  useEffect(() => {
    if (user) {
      if (user!.email === email) {
        setIsAuthenticated(true);
      }
    }
    setLoading(false);
  }, [user]);

  // If loading
  if (loading) {
    return <h1 style={{ color: 'white' }}>Loading...</h1>;
  }

  // If not authenticated
  if (!isAuthenticated) {
    toast.error('Please login to continue!');
    Router.push('/auth');
    return <div></div>;
  }

  return (
    <h1>
      <Button handler={signOut}>Logout</Button>
    </h1>
  );
};

export default DashboardPage;

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   let email = null;

//   if (req.headers.cookie) {
//     const tokens = req.headers.cookie.split(';');
//     const token = tokens.find((token) => token.includes('accessToken'));
//     if (token) {
//       const accessToken = token.trim().split('=')[1];
//       const decodedToken = decode(accessToken, { complete: true });
//       email = decodedToken?.payload.email;
//     }
//   }

//   return {
//     props: {
//       email,
//     },
//   };
// };
