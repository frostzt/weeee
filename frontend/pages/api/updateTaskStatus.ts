import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClient } from '../../Utils/createApolloClient';

// GraphQL Queries/Mutations
import { updateTaskStatus } from '../../GraphQLQueries/tasksQueries';

const updateCurrentTaskStatus = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    const { status, task } = req.body;

    const { accessToken } = cookie.parse(req.headers.cookie);

    const client = createApolloClient(accessToken);
    const UPDATE_STATUS = updateTaskStatus;

    try {
      const response = await client.mutate({
        mutation: UPDATE_STATUS,
        variables: { status, task },
      });

      const { updateTaskStatus } = response.data;
      res.json({ task: updateTaskStatus });
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
