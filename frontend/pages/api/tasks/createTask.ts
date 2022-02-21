import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClient } from '../../../Utils/createApolloClient';

// GraphQL Queries/Mutations
import { createTask as mutation } from '../../../GraphQLQueries/tasksQueries';

const updateCurrentTaskStatus = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    const { title, description, assignedTo } = req.body;

    const { accessToken } = cookie.parse(req.headers.cookie);

    const client = createApolloClient(accessToken);

    try {
      const response = await client.mutate({
        mutation,
        variables: { title, description, assignedTo },
      });

      const { createTask } = response.data;
      res.json({ task: createTask });
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
