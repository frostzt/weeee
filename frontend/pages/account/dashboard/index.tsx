import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Fragment, useContext, useEffect } from 'react';

// Styles
import cx from 'classnames';
import styles from './dashboard.module.scss';

// Components, Interfaces, HOCs
import { User } from '../../../interfaces/User.interface';
import { withLoading } from '../../../HOC/withLoading/withLoading';
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication';
import NavigationBarContext, { AvailablePages } from '../../../contexts/NavigationBar/NavigationBar.context';
import CompanyAnnouncements from '../../../components/DashboardComponents/CompanyAnnouncements/CompanyAnnouncements';

interface PageProps {
  user: User;
}

const DashboardPage: React.FC<PageProps> = ({ user }) => {
  // Globally let the NavBar know that page change occured
  const { changePage } = useContext(NavigationBarContext);
  useEffect(() => {
    changePage(AvailablePages.Dashboard);
  }, []);

  console.log(user);

  return (
    <Fragment>
      <Head>
        <title>Dashboard - Weeee</title>
        <meta name="description" content="Weeee dashboard, manage everything at one place!" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>Dashboard</div>
        <div className={styles.announcements}>
          <CompanyAnnouncements />
        </div>
      </div>
    </Fragment>
  );
};

export default withLoading(DashboardPage);

export const getServerSideProps: GetServerSideProps = requireAuthentication(async (_ctx) => {
  return {
    props: {},
  };
});
