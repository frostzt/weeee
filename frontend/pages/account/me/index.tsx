import React, { useContext } from 'react';
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

interface Context {
  user: User | undefined;
}

const MePage: React.FC = () => {
  const { user }: Context = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <motion.div
        variants={profileVarient}
        initial="initial"
        animate="animated"
        className={styles.profile}
      ></motion.div>
    </div>
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
