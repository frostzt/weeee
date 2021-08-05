import Head from 'next/head';
import { GetServerSideProps } from 'next';
import React, { Fragment, useState } from 'react';

// Custom
import { User } from '../../../interfaces/User.interface';
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
import { profileVarient } from './me.varients';

interface Props {
  user: User;
}

const MePage: React.FC<Props> = ({ user }) => {
  const [isEditingProfile, setIsEditingProfile] = useState<Boolean>(false);

  // Handlers
  const handleEditingProfile = () => {
    setIsEditingProfile((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Head>
        <title>Customize your profile | Weeee</title>
      </Head>
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
