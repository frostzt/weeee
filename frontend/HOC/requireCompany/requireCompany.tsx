import cookie from 'cookie';
import { getCompany } from '../../GraphQLQueries/companyQueries';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { createApolloClient } from '../../Utils/createApolloClient';

export function requireCompany(gssp: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;

    if (req.headers.cookie) {
      const { accessToken } = cookie.parse(req.headers.cookie);
      const client = createApolloClient(accessToken);

      try {
        const response = await client.query({ query: getCompany });
        const { getCompany: company } = response.data;

        if (!accessToken && !company && !company.email) {
          return {
            redirect: {
              permanent: false,
              destination: '/auth',
            },
          };
        }
      } catch (error) {
        return {
          redirect: {
            permanent: false,
            destination: '/auth',
          },
        };
      }
    }

    return await gssp(ctx);
  };
}
