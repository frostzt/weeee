import cookie from 'cookie';
import { gql } from '@apollo/client';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { createApolloClient } from '../../Utils/createApolloClient';

// @TODO Create a req to verify the user
// Create a gql query to request user from the API
export function requireAuthentication(gssp: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;

    if (req.headers.cookie) {
      const { accessToken } = cookie.parse(req.headers.cookie);
      const client = createApolloClient(accessToken);
      const GET_USER = gql`
        query {
          getUser {
            email
          }
        }
      `;

      try {
        // Send a request to the API and verify that the user exists
        // Reject and redirect if the user is undefined or there is no accessToken
        const response = await client.query({ query: GET_USER });
        const { getUser: user } = response.data;
        if (!accessToken || !user || !user.email) {
          return {
            redirect: {
              permanent: false,
              destination: '/auth',
            },
          };
        }
      } catch (error) {
        // Failure in the query or any error should fallback here
        // this route is possibly forbidden means the cookie is invalid
        // or the cookie is expired
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
