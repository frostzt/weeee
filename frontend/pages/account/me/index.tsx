import Head from 'next/head';
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

// Styling
import styles from './me.module.scss';
import { motion } from 'framer-motion';
import { AiFillEdit, AiFillMail } from 'react-icons/ai';

// Varients
import { profileVarient } from '../../../framer-varients/me.varients';
import { Toaster } from 'react-hot-toast';

interface Props {
  user: User;
}

const MePage: React.FC<Props> = ({ user }) => {
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
      {isEditingProfile ? <EditProfile stateHandler={handleEditingProfile} user={user} /> : null}
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
  return {
    props: {},
  };
});
