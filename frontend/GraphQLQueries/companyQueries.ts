import { gql } from '@apollo/client';

// Create a new user account
export const signUpCompanyMutation = gql`
  mutation signUpCompany($name: String!, $email: String!, $password: String!) {
    signUpCompany(createCompanyInput: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;

// Sign in with a company account
