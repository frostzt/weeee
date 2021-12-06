import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClient } from '../../Utils/createApolloClient';

// GraphQL Queries/Mutations
import { getMyTasks as tasksQuery } from '../../GraphQLQueries/tasksQueries';

const updateCurrentTaskStatus = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    const { accessToken } = cookie.parse(req.headers.cookie);

    const client = createApolloClient(accessToken);

    try {
      const response = await client.query({ query: tasksQuery });

      const { getMyTasks } = response.data;
      return res.json({ task: getMyTasks });
    } catch (error: any) {
      console.error(error);
      if (error.networkError) {
        console.error(error.networkError.result);
      }
      res.json({ error });
    }
  }
};

export default updateCurrentTaskStatus;
