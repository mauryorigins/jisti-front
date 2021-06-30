import Head from 'next/head';
import { FC } from 'react';

import styles from './dashboard-layout.module.css';
import Footer from './footer';
import Navbar from './navbar';
import Sidebar from './sidebar';

interface IProps {
  title?: string;
}

const DashboardLayout: FC<IProps> = ({ children, title = 'Onephase' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Onephase Webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['dashboard-layout']}>
        <div className={styles['dashboard-layout-container']}>
          <Sidebar />
          <div className={styles['dashboard-layout-content']}>
            <Navbar />
            <main className={styles['dashboard-layout-content-child']}>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
