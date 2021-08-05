import React, { useState, useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../contexts/AuthContext/Auth.context';
import LoadingScreen from './LoadingComponents/LoadingScreen';

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
        // setLoading(false);
      }
    }, [user]);

    // If loading
    if (loading) {
      return (
        <Fragment>
          <LoadingScreen />
        </Fragment>
      );
    }

    return <WrappedComponent isAuthenticated={isAuthenticated} user={user} signOut={signOut} {...props} />;
  };
};
