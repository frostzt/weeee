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
  mutation updateTaskStatus($status: String!, $task: String!) {
    updateTaskStatus(updateInput: { status: $status, task: $task }) {
      id
      title
      status
      description
    }
  }
`;
