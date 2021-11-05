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