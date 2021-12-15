import { gql } from '@apollo/client';

// Get announcement for a user from his company
export const getMyAnnouncements = gql`
  query {
    getMyAnnouncements {
      id
      title
      description
      createdAt
    }
  }
`;

export const getCompanyAnnouncementsQuery = gql`
  query {
    getCompanyAnnouncements {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;

export const createAnnoucementMutation = gql`
  mutation createAnnoucement($title: String!, $description: String!) {
    createAnnoucement(data: { title: $title, description: $description }) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
