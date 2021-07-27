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

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const client = createApolloClient();
      const SIGN_IN = gql`
        query signIn($email: String!, $password: String!) {
          signIn(loginData: { email: $email, password: $password }) {
            accessToken
            user {
              id
              name
              email
              age
              username
              createdAt
              updatedAt
            }
          }
        }
      `;

      const response = await client.query({
        query: SIGN_IN,
        variables: { email, password },
      });

      const { accessToken, user } = response.data.signIn;

      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(400).json({});
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed!` });
  }
};

export default login;
