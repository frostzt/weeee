import { AnimatePresence, motion } from 'framer-motion';
import AuthContext from '../../contexts/AuthContext/Auth.context';
import styles from './LoadingComponents/LoadingScreen.module.scss';
import React, { useState, useContext, useEffect, Fragment } from 'react';

// Varients
import { DotVarient } from './LoadingComponents/LoadingScreen.varients';
import { ContainerVarient } from './LoadingComponents/LoadingScreen.varients';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { NavigationBarContextProvider } from '../../contexts/NavigationBar/NavigationBar.context';

export const withLoading = (WrappedComponent: React.FC<any>) => {
  return (props: any) => {
    // States
    const [loading, setLoading] = useState<Boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);

    // Context
    const { user, signOut } = useContext(AuthContext);

    useEffect(() => {
      if (user) {
        setIsAuthenticated(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }, [user]);

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
        {!loading ? (
          <NavigationBarContextProvider>
            <NavigationBar />
            <WrappedComponent isAuthenticated={isAuthenticated} user={user} signOut={signOut} {...props} />
          </NavigationBarContextProvider>
        ) : null}
      </Fragment>
    );
  };
};
