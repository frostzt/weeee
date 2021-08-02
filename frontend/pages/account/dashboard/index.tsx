import Head from 'next/head';
import toast from 'react-hot-toast';
import { GetServerSideProps } from 'next';
import { Fragment } from 'react';

// Styles
import styles from './dashboard.module.scss';

// Components, Interfaces, HOCs
import { User } from '../../../interfaces/User.interface';
import { Button } from '../../../components/Button/Button';
import { withLoading } from '../../../HOC/withLoading/withLoading';
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication';

interface PageProps {
  signOut(): void;
  user: User;
}

interface AuthContextProps {
  signOut(): void;
  user: User | undefined;
}

const DashboardPage: React.FC<PageProps> = ({ signOut, user }) => {
  console.log(user);

  return (
    <Fragment>
      <Head>
        <title>Dashboard - Weeee</title>
        <meta name="description" content="Weeee dashboard, manage everything at one place!" />
      </Head>
      <Button handler={signOut}>Logout</Button>
    </Fragment>
  );
};

export default withLoading(DashboardPage);

export const getServerSideProps: GetServerSideProps = requireAuthentication(async (_ctx) => {
  return {
    props: {},
  };
});
