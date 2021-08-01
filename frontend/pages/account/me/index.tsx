import Head from 'next/head';
import React, { Fragment, useContext } from 'react';
import { GetServerSideProps } from 'next';

// Custom
import { User } from '../../../interfaces/User.interface';
import AuthContext from '../../../contexts/AuthContext/Auth.context';
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication';

// Styling
import styles from './me.module.scss';
import { motion } from 'framer-motion';

// Varients
import { profileVarient } from './me.varients';
import { useEffect } from 'react';

interface Props {}

interface Context {
  user: User | undefined;
}

const MePage: React.FC<Props> = ({}) => {
  const { user }: Context = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Fragment>
      <Head>
        <title>Me - Dashboard</title>
      </Head>
      <div className={styles.container}>
        <motion.div
          variants={profileVarient}
          initial="initial"
          animate="animated"
          className={styles.profile}
        ></motion.div>
      </div>
    </Fragment>
  );
};

export default MePage;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    return {
      props: {},
    };
  }
);
