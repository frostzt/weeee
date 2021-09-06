import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Fragment, useContext, useEffect } from 'react';

// Styles
import styles from './dashboard.module.scss';
import { GrAnnounce } from 'react-icons/gr';

// Components, Interfaces, HOCs
import { FullUser } from '../../../interfaces/User.interface';
import { withLoading } from '../../../HOC/withLoading/withLoading';
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication';
import FeatureButtons from 'components/DashboardComponents/FeatureButtons/FeatureButtons';
import NavigationBarContext, { AvailablePages } from '../../../contexts/NavigationBar/NavigationBar.context';

interface PageProps {
  user: FullUser;
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
          <FeatureButtons Icon={GrAnnounce} />
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
