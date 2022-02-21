import { gql } from '@apollo/client';

export const getAllTasks = gql`
  query {
    getAllTasks {
      id
      title
      createdAt
      description
      status
    }
  }
`;

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

export const createTask = gql`
  mutation CreateTask($title: String!, $description: String!, $assignedTo: String!) {
    createTask(data: { title: $title, description: $description, assignedTo: $assignedTo }) {
      id
      title
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
