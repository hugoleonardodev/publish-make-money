import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { StocksProvider } from '../core/hooks/useStocks';

import { GlobalCss } from '../styles/global';
import { makeMoneyTheme } from '../styles/themes/muiThemes';

interface JssStyles extends Element {
  parentNode: Node & ParentNode;
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: JssStyles | null =
      document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={makeMoneyTheme}>
      <StocksProvider>
        <GlobalCss />
        <CssBaseline />
        <Component {...pageProps} router={router} />
      </StocksProvider>
    </ThemeProvider>
  );
};

export default MyApp;
