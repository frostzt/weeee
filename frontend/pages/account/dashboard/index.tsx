import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Fragment, useContext, useEffect } from 'react';

// Styles

// Components, Interfaces, HOCs
import { User } from '../../../interfaces/User.interface';
import { Button } from '../../../components/Button/Button';
import { withLoading } from '../../../HOC/withLoading/withLoading';
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication';
import NavigationBarContext, { AvailablePages } from '../../../contexts/NavigationBar/NavigationBar.context';

interface PageProps {
  user: User;
}

const DashboardPage: React.FC<PageProps> = ({ user }) => {
  // Globally let the NavBar know that page change occured
  const { changePage } = useContext(NavigationBarContext);
  useEffect(() => {
    changePage(AvailablePages.Dashboard);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Dashboard - Weeee</title>
        <meta name="description" content="Weeee dashboard, manage everything at one place!" />
      </Head>
    </Fragment>
  );
};

export default withLoading(DashboardPage);

export const getServerSideProps: GetServerSideProps = requireAuthentication(async (_ctx) => {
  return {
    props: {},
  };
});
