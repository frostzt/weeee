import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../contexts/AuthContext/Auth.context';

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
      }
      setLoading(false);
    }, [user]);

    // If loading
    if (loading) {
      return (
        <>
          <h1 style={{ color: 'white' }}>Loading...</h1>
        </>
      );
    }

    return <WrappedComponent user={user} signOut={signOut} {...props} />;
  };
};
