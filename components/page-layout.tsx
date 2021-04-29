import Head from 'next/head';
import { FC } from 'react';

import styles from '../styles/page-layout.module.css';

interface IProps {
  title?: string;
}

const PageLayout: FC<IProps> = ({ children, title = 'Onephase' }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Onephase Webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <p>Header</p>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default PageLayout;
