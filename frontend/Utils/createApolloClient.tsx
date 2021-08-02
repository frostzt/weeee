import { API_URL } from '../Config/Config';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = (accessToken: string) => {
  const ENDPOINT = `${API_URL}/graphql`;

  const httpLink = createHttpLink({
    uri: ENDPOINT,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
