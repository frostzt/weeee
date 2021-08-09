import cookie from 'cookie';
import { gql } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';

// Custom imports
import { createApolloClientNT } from '../../../Utils/createApolloClient';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const client = createApolloClientNT();
    const SIGN_IN = gql`
      query signIn($email: String!, $password: String!) {
        signIn(loginData: { email: $email, password: $password }) {
          accessToken
          user {
            id
            name
            email
            age
            bio
            username
            picture
            createdAt
            updatedAt
          }
        }
      }
    `;

    try {
      const response = await client.query({
        query: SIGN_IN,
        variables: { email, password },
      });

      const { accessToken, user } = response.data.signIn;

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('accessToken', accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7,
          sameSite: 'strict',
          path: '/',
        })
      );

      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.json({ error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed!` });
  }
};

export default login;
