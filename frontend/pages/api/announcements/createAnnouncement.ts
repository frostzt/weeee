import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClient } from '../../../Utils/createApolloClient';

// GraphQL Queries/Mutations
import { createAnnoucementMutation as mutation } from '../../../GraphQLQueries/announcementQueries';

const getAllAnnoucements = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    const { accessToken } = cookie.parse(req.headers.cookie);

    const client = createApolloClient(accessToken);

    try {
      const response = await client.mutate({
        mutation,
        variables: {
          title: req.body.title,
          description: req.body.description,
        },
      });

      const { createAnnouncement } = response.data;
      res.json({ createAnnouncement });
    } catch (error: any) {
      console.error(error);
      if (error.networkError) {
        console.error(error.networkError.result);
      }
      res.json({ error });
    }
  }
};

export default getAllAnnoucements;
