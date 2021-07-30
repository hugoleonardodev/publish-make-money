import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { StocksProvider } from '../core/hooks/useStocks';

import '../public/nprogress.css';
import { GlobalCss } from '../styles/global';
import { MonetusTheme } from '../styles/themes/muiThemes';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  interface JssStyles extends Element {
    parentNode: Node & ParentNode;
  }

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: JssStyles | null =
      document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={MonetusTheme}>
      <StocksProvider>
        <GlobalCss />
        <CssBaseline />
        <Component {...pageProps} router={router} />
      </StocksProvider>
    </ThemeProvider>
  );
};

export default MyApp;
