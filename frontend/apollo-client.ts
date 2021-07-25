import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const ENDPOINT = 'http://localhost:5000';

const httpLink = createHttpLink({
  uri: ENDPOINT,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
