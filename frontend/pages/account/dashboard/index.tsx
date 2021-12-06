import React from 'react';
import cookie from 'cookie';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { GetServerSideProps } from 'next';
import { Fragment, useContext, useEffect, useState } from 'react';

// Gql
import { createApolloClient } from '../../../Utils/createApolloClient';
import { getMyAnnouncements } from 'GraphQLQueries/announcementQueries';

// Styles
import { BiTask } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';
import styles from './dashboard.module.scss';

// Components, Interfaces, HOCs
import { FullUser } from '../../../interfaces/User.interface';
import Tasks from 'components/DashboardComponents/Tasks/Tasks';
import { withLoading } from '../../../HOC/withLoading/withLoading';
import FeatureButtons from 'components/DashboardComponents/FeatureButtons/FeatureButtons';
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication';
import CompanyAnnouncements from 'components/DashboardComponents/CompanyAnnouncements/CompanyAnnouncements';
import NavigationBarContext, { AvailablePages } from '../../../contexts/NavigationBar/NavigationBar.context';
import AnnouncementInterface from '../../../components/DashboardComponents/CompanyAnnouncements/Announcement.interface';

interface PageProps {
  err?: string;
  user: FullUser;
  data?: AnnouncementInterface[];
}

const DashboardPage: React.FC<PageProps> = ({ user, data, err }) => {
  const [showTasks, setShowTasks] = useState<boolean>(false);
  const [showAnnouncement, setShowAnnouncement] = useState<boolean>(false);

  const Router = useRouter();

  useEffect(() => {
    if (user.accountType === 'Company') {
      Router.replace('/account/admin');
    }
  }, []);

  // Check for company
  let noCompany = true;
  if (user) {
    noCompany = user.companyOrOrganization.email === 'NONE@NONE.com';
  }

  // Globally let the NavBar know that page change occured
  const { changePage } = useContext(NavigationBarContext);
  useEffect(() => {
    changePage(AvailablePages.Dashboard);
  }, []);

  // Handlers
  const handleShowAnnouncements = () => {
    setShowAnnouncement((prevState) => !prevState);
  };

  const handleShowTasks = () => {
    setShowTasks((prevState) => !prevState);
  };

  return (
    <Fragment>
      {showAnnouncement && (
        <CompanyAnnouncements noCompany={noCompany} user={user} handler={handleShowAnnouncements} err={err} data={data} />
      )}
      {showTasks && <Tasks noCompany={noCompany} user={user} handler={handleShowTasks} />}
      <Head>
        <title>Dashboard - Weeee</title>
        <meta name="description" content="Weeee dashboard, manage everything at one place!" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>Welcome {user.name} - Dashboard</div>
        <h2 className={styles.title}>Quick view</h2>
        <div className={styles.features}>
          <FeatureButtons title="Announcements" Icon={BsFillMicFill} handler={handleShowAnnouncements} />
          <FeatureButtons title="Tasks" Icon={BiTask} handler={handleShowTasks} />
        </div>
      </div>
    </Fragment>
  );
};

export default withLoading(DashboardPage);

export const getServerSideProps: GetServerSideProps = requireAuthentication(async ({ req }) => {
  if (req.headers.cookie) {
    try {
      // Generate the client and get the cookie
      const { accessToken } = cookie.parse(req.headers.cookie);
      const client = createApolloClient(accessToken);

      const { data } = await client.query({ query: getMyAnnouncements });

      return {
        props: {
          data: data.getMyAnnouncements,
        },
      };
    } catch (error) {
      const serializedError = JSON.stringify(error);

      return {
        props: {
          err: serializedError,
          data: 'There was an error fetching the data',
        },
      };
    }
  } else {
    return {
      props: {
        data: 'Please verify your session!',
      },
    };
  }
});
