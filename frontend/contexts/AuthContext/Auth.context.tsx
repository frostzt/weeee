import { gql } from '@apollo/client';
import { toast } from 'react-hot-toast';
import { NEXT_URL } from '../../Config/Config';
import { createContext, useState } from 'react';
import { StringValueNode } from 'graphql';

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

// Mutations
const CREATE_USER = gql`
  mutation signUp(
    $name: String!
    $email: String!
    $password: String!
    $username: String!
  ) {
    signUp(
      createUserInput: {
        name: $name
        email: $email
        password: $password
        username: $username
      }
    )
  }
`;

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

    const res = await fetch(`${NEXT_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (res.ok) {
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
