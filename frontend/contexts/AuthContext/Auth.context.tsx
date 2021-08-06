import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { NEXT_URL } from '../../Config/Config';
import { createContext, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

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
  email: String;
  password: String;
}

export interface UpdatedData {
  name: String;
  age: Number;
  email: String;
  username: String;
}

const AuthContext = createContext({
  user: undefined,
  error: undefined,
  signIn: (event: Event, credentials: SignInProps) => {},
  signUp: (event: Event, credentials: SignUpProps) => {},
  updateUser: (event: Event, updatedData: any) => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const Router = useRouter();

  useEffect(() => {
    checkIfUserLoggedIn();
  }, []);

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

      if (res.data.error) {
        toast.error(res.data.error.message);
        setError(res.data.error.message);
        return;
      }

      const { user } = res.data;
      setUser(user);
      Router.push('/account/dashboard');
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  // Update User
  const updateUser = async (event: Event, updatedData: UpdatedData) => {
    event.preventDefault();
    const { name, email, username, age } = updatedData;

    try {
      const res = await axios.post(
        `${NEXT_URL}/api/auth/updateUser`,
        { name, email, username, age },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      await axios.post(`${NEXT_URL}/api/auth/logout`);
      setUser(undefined);
      Router.push('/');
      toast.success('Logged out successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  // Check if user is logged in
  const checkIfUserLoggedIn = async () => {
    try {
      const res = await axios.post(`${NEXT_URL}/api/auth/user`);
      setUser(res.data.user);
    } catch (error) {
      setUser(undefined);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, signIn, signUp, signOut, updateUser }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
