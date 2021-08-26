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

    const { name, email, username, age, bio, companyOrOrganization } = req.body;

    const { accessToken } = cookie.parse(req.headers.cookie);

    const client = createApolloClient(accessToken);
    const UPDATE_USER = gql`
      mutation updateUser($name: String, $email: String, $username: String, $age: Int, $bio: String, $companyOrOrganization: String) {
        updateUser(
          updateData: {
            name: $name
            email: $email
            username: $username
            age: $age
            bio: $bio
            companyOrOrganization: $companyOrOrganization
          }
        ) {
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
    `;

    try {
      const response = await client.mutate({
        mutation: UPDATE_USER,
        variables: { name, email, username, age, bio, companyOrOrganization },
      });

      const { updateUser } = response.data;
      res.json({ user: updateUser });
    } catch (error) {
      console.error(error.networkError.result.errors);
      res.json({ error });
    }
  }
};

export default updateUser;
