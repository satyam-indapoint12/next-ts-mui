import * as React from 'react';
import { AppProps } from 'next/app';
import ThemeWrapper from '../assets/theme';
import '../assets/css/app.css';
import Layout from '../shared/layout';
import { appWithTranslation } from 'next-i18next';

// Client-side cache, shared for the whole session of the user in the browser.

interface MyAppProps extends AppProps {}

function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  return (
    <ThemeWrapper>
      <Layout metaData={pageProps.metaData}>
        <Component {...pageProps} />
      </Layout>
    </ThemeWrapper>
  );
}
export default appWithTranslation(MyApp);
