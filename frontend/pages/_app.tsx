import Head from 'next/head';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

// Apollo
import { client } from '../apollo-client';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider session={pageProps.session}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
export default MyApp;
