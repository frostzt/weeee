import { gql } from '@apollo/client';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClient } from '../../../Utils/createApolloClient';

const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    const { name, email, username, age } = req.body;

    const { accessToken } = cookie.parse(req.headers.cookie);

    const client = createApolloClient(accessToken);
    const UPDATE_USER = gql`
      mutation updateUser($name: String, $email: String, $username: String, $age: Int) {
        updateUser(updateData: { name: $name, email: $email, username: $username, age: $age }) {
          id
          name
          email
          age
          username
          picture
          createdAt
          updatedAt
        }
      }
    `;

    try {
      const response = await client.mutate({
        mutation: UPDATE_USER,
        variables: { name, email, username, age },
      });

      const { updateUser } = response.data;
      res.json({ user: updateUser });
    } catch (error) {
      console.error(error);
      res.json({ error });
    }
  }
};

export default updateUser;
