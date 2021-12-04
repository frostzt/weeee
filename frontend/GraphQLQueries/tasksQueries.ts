import { gql } from '@apollo/client';

export const getMyTasks = gql`
  query {
    getMyTasks {
      id
      title
      status
      description
    }
  }
`;

export const updateTaskStatus = gql`
  mutation {
    
  }
`;
