import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '../../../Config/Config';
import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';

export const createApolloClient = () => {
  const ENDPOINT = `${API_URL}/graphql`;

  const httpLink = createHttpLink({
    uri: ENDPOINT,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Destroy cookie
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('accessToken', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        expires: new Date(0),
        sameSite: 'strict',
        path: '/',
      })
    );

    res.status(200).json({ message: 'Successfully logged out!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed!` });
  }
};

export default logout;
