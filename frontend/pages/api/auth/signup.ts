import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClientNT } from '../../../Utils/createApolloClient';

// GraphQL Queries/Mutations
import { signUpMutation } from 'GraphQLQueries/userQueries';
import { signUpCompanyMutation } from 'GraphQLQueries/companyQueries';

const signup = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { name, email, username, password, isCompany } = req.body;

    const client = createApolloClientNT();
    const SIGN_UP = signUpMutation;
    const SIGN_UP_COMPANY = signUpCompanyMutation;

    try {
      if (isCompany) {
        await client.mutate({
          mutation: SIGN_UP_COMPANY,
          variables: { name, email, password },
        });
      } else {
        await client.mutate({
          mutation: SIGN_UP,
          variables: { name, email, username, password },
        });
      }

      res.json({ msg: 'Account created successfully!' });
    } catch (error) {
      console.error(error);
      res.json({ error });
    }
  }
};

export default signup;
