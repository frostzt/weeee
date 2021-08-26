import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { GetServerSideProps } from 'next';
import React, { Fragment, useState, useContext, useEffect } from 'react';
import NavigationBarContext from '../../../contexts/NavigationBar/NavigationBar.context';

// Custom
import { User } from '../../../interfaces/User.interface';
import { AvailablePages } from '../../../contexts/NavigationBar/NavigationBar.context';
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication';

// Components, HOCs
import { withLoading } from '../../../HOC/withLoading/withLoading';
import EditProfile from '../../../components/Profile/EditProfile/EditProfile';
import ProfilePicture from '../../../components/Profile/ProfilePicture/ProfilePicture';

// Apollo
import { gql } from '@apollo/client';
import { client } from '../../../apollo-client';

// Styling
import styles from './me.module.scss';
import { motion } from 'framer-motion';
import { AiFillEdit, AiFillMail } from 'react-icons/ai';

// Varients
import { profileVarient } from '../../../framer-varients/me.varients';

export interface Company {
  id: string;
  name: string;
  email: string;
}

interface Props {
  user: User;
  companies: Company[];
}

const MePage: React.FC<Props> = ({ user, companies }) => {
  const [isEditingProfile, setIsEditingProfile] = useState<Boolean>(false);

  // Globally let the NavBar know that page changed
  const { changePage } = useContext(NavigationBarContext);
  useEffect(() => {
    changePage(AvailablePages.Me);
  }, []);

  // Handlers
  const handleEditingProfile = () => {
    setIsEditingProfile((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Head>
        <title>Customize your profile | Weeee</title>
      </Head>
      <Toaster />
      {isEditingProfile ? <EditProfile companies={companies} stateHandler={handleEditingProfile} user={user} /> : null}
      <div className={styles.container}>
        <motion.div variants={profileVarient} initial="initial" animate="animated" className={styles.profile}>
          <div onClick={handleEditingProfile} className={styles.item}>
            <AiFillEdit />
          </div>
          <div className={styles.profileInfo}>
            <ProfilePicture picture={user.picture ? user.picture : 'dog'} />
            <h2 className={styles.name}>{user.name}</h2>
          </div>
          <div className={styles.item}>
            <AiFillMail />
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default withLoading(MePage);

export const getServerSideProps: GetServerSideProps = requireAuthentication(async (_ctx) => {
  const { data } = await client.query({
    query: gql`
      query getAllCompanies {
        getAllCompanies {
          id
          name
        }
      }
    `,
  });

  return {
    props: {
      companies: data.getAllCompanies,
    },
  };
});
