import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClient } from '../../../Utils/createApolloClient';

// GraphQL Queries/Mutations
import { getAllTasks as query } from '../../../GraphQLQueries/tasksQueries';

const getAllAnnoucements = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    const { accessToken } = cookie.parse(req.headers.cookie);

    const client = createApolloClient(accessToken);

    try {
      const response = await client.query({ query });

      const { getAllTasks } = response.data;
      res.json({ tasks: getAllTasks });
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
