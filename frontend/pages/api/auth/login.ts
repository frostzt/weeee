import { gql } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';

// Queries
const SIGN_IN = gql`
  query signIn($email: String!, $password: String!) {
    signIn(loginData: { email: $email, password: $password })
  }
`;

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    console.log(req.body);

    res.status(200).json({});
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed!` });
  }
};

export default login;
