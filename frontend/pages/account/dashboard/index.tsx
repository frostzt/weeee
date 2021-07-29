import { useContext } from 'react';

import { GetServerSideProps } from 'next';
import styles from './dashboard.module.scss';

// Contexts
import AuthContext from '../../../contexts/AuthContext/Auth.context';
import { Button } from '../../../components/Button/Button';

const DashboardPage = (props: any) => {
  const { signOut } = useContext(AuthContext);

  return (
    <h1>
      <Button handler={signOut}>Logout</Button>
    </h1>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.headers.cookie) {
    const tokens = req.headers.cookie.split(';');
    const token = tokens.find((token) => token.includes('accessToken'));
    if (token) {
      console.log('Access token found!');
      const accessToken = token.trim().split('=')[1];
      console.log(accessToken);
    }
  }

  console.log('All available cookies!');
  console.log(req.headers.cookie);

  return {
    props: {
      boi: 'Hello',
    },
  };
};
