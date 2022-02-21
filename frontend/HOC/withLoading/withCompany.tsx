import React, { useContext, useEffect, useState, Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AuthContext from '../../contexts/AuthContext/Auth.context';

import styles from './LoadingComponents/LoadingScreen.module.scss';
import { ContainerVarient, DotVarient } from './LoadingComponents/LoadingScreen.varients';

export const withCompany = (WrappedComponent: React.FC<any>) => {
  const Component = (props: any) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    // Context
    const { company, signOut } = useContext(AuthContext);

    useEffect(() => {
      if (company) {
        setAuthenticated(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }, [company]);

    return (
      <Fragment>
        <AnimatePresence>
          {loading && (
            <motion.div
              variants={ContainerVarient}
              exit="exit"
              key="modal"
              initial="initial"
              animate="animated"
              className={styles.container}
            >
              <div className={styles.dots}>
                <motion.div variants={DotVarient} className={styles.dot} />
                <motion.div variants={DotVarient} className={styles.dot} />
                <motion.div variants={DotVarient} className={styles.dot} />
                <motion.div variants={DotVarient} className={styles.dot} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {!loading ? <WrappedComponent authenticated={authenticated} company={company} signOut={signOut} {...props} /> : null}
      </Fragment>
    );
  };

  return Component;
};
