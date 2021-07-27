import { gql } from '@apollo/client';

// Queries
export const SIGN_IN = gql`
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

// Mutations
export const CREATE_USER = gql`
  mutation signUp(
    $name: String!
    $email: String!
    $password: String!
    $username: String!
  ) {
    signUp(
      createUserInput: {
        name: $name
        email: $email
        password: $password
        username: $username
      }
    )
  }
`;
