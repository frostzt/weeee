import { gql } from '@apollo/client';

// Get User with specified details
export const getUserQuery = gql`
  query {
    getUser {
      id
      age
      name
      email
      bio
      username
      picture
      updatedAt
      createdAt
      companyOrOrganization {
        id
        name
        email
      }
    }
  }
`;

// Update user based on details provided
export const updateUserMutation = gql`
  mutation updateUser($name: String, $email: String, $username: String, $age: Int, $bio: String, $companyOrOrganization: String) {
    updateUser(
      updateData: { name: $name, email: $email, username: $username, age: $age, bio: $bio, companyOrOrganization: $companyOrOrganization }
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

// Sign the user in and return accessToken and the user
export const signInUserQuery = gql`
  query signIn($email: String!, $password: String!) {
    signIn(loginData: { email: $email, password: $password }) {
      accessToken
      user {
        id
        age
        name
        email
        bio
        username
        picture
        updatedAt
        createdAt
        companyOrOrganization {
          id
          name
          email
        }
      }
    }
  }
`;

// Create a new user account
export const signUpMutation = gql`
  mutation signUp($name: String!, $email: String!, $username: String!, $password: String!) {
    signUp(createUserInput: { name: $name, email: $email, username: $username, password: $password })
  }
`;
