import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <div id="popup-holder" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
