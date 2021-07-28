import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '../../../Config/Config';
import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const createApolloClient = (accessToken: string) => {
  const ENDPOINT = `${API_URL}/graphql`;

  const httpLink = createHttpLink({
    uri: ENDPOINT,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    const { accessToken } = cookie.parse(req.headers.cookie);

    const client = createApolloClient(accessToken);
    const GET_USER = gql`
      query {
        getUser {
          id
          age
          name
          email
          username
          updatedAt
          createdAt
        }
      }
    `;

    try {
      const response = await client.query({
        query: GET_USER,
      });

      const { getUser } = response.data;

      return res.status(200).json({ user: getUser });
    } catch (error) {
      return res.json({ error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed!` });
  }
};

export default user;
