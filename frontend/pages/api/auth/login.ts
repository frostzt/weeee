import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

// GraphQL Queries/Mutations
import { signInUserQuery } from 'GraphQLQueries/userQueries';
import { signInCompanyQuery } from 'GraphQLQueries/companyQueries';

// Custom imports
import { createApolloClientNT } from '../../../Utils/createApolloClient';

const login = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { email, password, isCompany } = req.body;

    const client = createApolloClientNT();
    const SIGN_IN = signInUserQuery;
    const SIGN_IN_COMPANY = signInCompanyQuery;

    try {
      if (!isCompany) {
        const response = await client.query({
          query: SIGN_IN,
          variables: { email, password },
        });

        const { accessToken, user } = response.data.signIn;

        res.setHeader(
          'Set-Cookie',
          cookie.serialize('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'strict',
            path: '/',
          })
        );

        return res.status(200).json({ user });
      }

      // If isCompany
      const response = await client.query({
        query: SIGN_IN_COMPANY,
        variables: { email, password },
      });

      const { accessToken, company } = response.data.signInCompany;

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('accessToken', accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7,
          sameSite: 'strict',
          path: '/',
        })
      );

      return res.status(200).json({ company });
    } catch (error) {
      console.error(error);
      return res.json({ error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed!` });
  }
};

export default login;
