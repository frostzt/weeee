import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from './Config/Config';

const ENDPOINT = API_URL;

const httpLink = createHttpLink({
  uri: ENDPOINT,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
