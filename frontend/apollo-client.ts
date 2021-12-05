import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from './Config/Config';

const ENDPOINT = `${API_URL}/graphql`;

const httpLink = createHttpLink({
  uri: ENDPOINT,
  credentials: 'include',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
