import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClient } from '../../../Utils/createApolloClient';

// GraphQL Queries/Mutations
import { getCompanyAnnouncementsQuery } from '../../../GraphQLQueries/announcementQueries';

const getAllAnnoucements = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    const { accessToken } = cookie.parse(req.headers.cookie);

    const client = createApolloClient(accessToken);

    try {
      const response = await client.query({ query: getCompanyAnnouncementsQuery });

      const { getCompanyAnnouncements } = response.data;
      return res.json({ announcements: getCompanyAnnouncements });
    } catch (error: any) {
      if (error.networkError) {
        console.error(error.networkError.result);
      }
      return res.json({ error });
    }
  }
};

export default getAllAnnoucements;
