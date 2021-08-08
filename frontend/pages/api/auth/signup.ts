import { gql } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClientNT } from '../../../Utils/createApolloClient';

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, username, password } = req.body;

    const client = createApolloClientNT();
    const SIGN_UP = gql`
      mutation signUp($name: String, $email: String, $username: String, $password: String) {
        signUp(createUserInput: { name: $name, email: $email, username: $username, password: $password })
      }
    `;

    try {
      const response = await client.mutate({
        mutation: SIGN_UP,
        variables: { name, email, username, password },
      });

      console.log(response);
      res.json({ msg: 'Account created successfully!' });
    } catch (error) {
      console.error(error);
      res.json({ error });
    }
  }
};

export default signup;
