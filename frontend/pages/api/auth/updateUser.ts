import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClient } from '../../../Utils/createApolloClient';

// GraphQL Queries/Mutations
import { updateUserMutation } from 'GraphQLQueries/userQueries';

const updateUser = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    const { name, email, username, age, bio, companyOrOrganization } = req.body;

    const { accessToken } = cookie.parse(req.headers.cookie);

    const client = createApolloClient(accessToken);
    const UPDATE_USER = updateUserMutation;

    try {
      const response = await client.mutate({
        mutation: UPDATE_USER,
        variables: { name, email, username, age, bio, companyOrOrganization },
      });

      const { updateUser } = response.data;
      res.json({ user: updateUser });
    } catch (error: any) {
      console.error(error);
      if (error.networkError) {
        console.error(error.networkError.result);
      }
      res.json({ error });
    }
  }
};

export default updateUser;
