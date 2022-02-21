import React, { useState, useContext, useEffect, Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AuthContext from '../../contexts/AuthContext/Auth.context';
import styles from './LoadingComponents/LoadingScreen.module.scss';

// Varients
import { DotVarient } from './LoadingComponents/LoadingScreen.varients';
import { ContainerVarient } from './LoadingComponents/LoadingScreen.varients';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { NavigationBarContextProvider } from '../../contexts/NavigationBar/NavigationBar.context';

export const withLoading = (WrappedComponent: React.FC<any>) => {
  const Component = (props: any) => {
    // States
    const [loading, setLoading] = useState<boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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
            <NavigationBar signOut={signOut} />
            <WrappedComponent isAuthenticated={isAuthenticated} user={user} signOut={signOut} {...props} />
          </NavigationBarContextProvider>
        ) : null}
      </Fragment>
    );
  };

  return Component;
};
