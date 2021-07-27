import { gql } from '@apollo/client';
import { toast } from 'react-hot-toast';
import { NEXT_URL } from '../../Config/Config';
import { createContext, useState } from 'react';
import { StringValueNode } from 'graphql';
import axios from 'axios';

interface ProviderProps {
  children: React.ReactNode;
}

export interface SignUpProps {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInProps {
  email: string;
  password: string;
}

const AuthContext = createContext({
  user: undefined,
  error: undefined,
  signIn: (event: Event, credentials: SignInProps) => {},
  signUp: (event: Event, credentials: SignUpProps) => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  // Register
  const signUp = (event: Event, credentials: SignUpProps) => {
    event.preventDefault();
    const { name, username, email, password, confirmPassword } = credentials;

    // Verify if password match
    if (password !== confirmPassword) {
      toast.error('The passwords did not match!');
      return null;
    }

    console.log(credentials);
  };

  // Sign in
  const signIn = async (event: Event, credentials: SignInProps) => {
    event.preventDefault();
    const { email, password } = credentials;

    try {
      const res = await axios.post(
        `${NEXT_URL}/api/auth/login`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(res);

      const { user } = res.data;
      setUser(user);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  // Sign out
  const signOut = () => {
    console.log('Sign Out');
  };

  // Check if user is logged in
  const checkIfUserLoggedIn = () => {
    console.log('Check');
  };

  return (
    <AuthContext.Provider value={{ user, error, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
