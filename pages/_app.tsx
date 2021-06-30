import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  // Remove server-side CSS injected from the client-side app
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles !== null && jssStyles.parentElement !== null) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />;
};

export default App;
