import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

// Authentication Providers
import { AuthProvider } from '../contexts/AuthContext/Auth.context';
import { Provider } from 'next-auth/client';

// Apollo
import { client } from '../apollo-client';
import { ApolloProvider } from '@apollo/client';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Provider session={pageProps.session}>
          <Head>
            <title>Weeee | Manage everything at one place!</title>
            <meta name="description" content="Weeee manage everything at one place!" />
          </Head>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </AuthProvider>
  );
};

export default MyApp;
