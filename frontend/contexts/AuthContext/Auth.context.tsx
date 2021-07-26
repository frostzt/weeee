import { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';

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

const AuthContext = createContext({
  user: undefined,
  error: undefined,
  signIn: () => {},
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
  const signIn = () => {
    console.log('Sign In');
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
