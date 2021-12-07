import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClient } from '../../../Utils/createApolloClient';

// Queries
import { getCompany as query } from 'GraphQLQueries/companyQueries';

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Return if no cookie exists
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    // Get accessToken from parsed cookie
    const { accessToken } = cookie.parse(req.headers.cookie);

    // Create new apollo-client and the query
    const client = createApolloClient(accessToken);

    try {
      const response = await client.query({
        query,
      });

      const { getCompany } = response.data;

      return res.status(200).json({ company: getCompany });
    } catch (error) {
      return res.json({ error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed!` });
  }
};

export default user;
