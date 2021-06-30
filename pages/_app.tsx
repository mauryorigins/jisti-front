import { useEffect } from 'react';

import '../styles/globals.css';
import AppRouter from './_router';

const App = () => {
  // Remove server-side CSS injected from the client-side app
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles !== null && jssStyles.parentElement !== null) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  /**
   * SPA implementation took from here
   * https://colinhacks.com/essays/building-a-spa-with-nextjs
   */
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <AppRouter />}
    </div>
  );
};

export default App;
