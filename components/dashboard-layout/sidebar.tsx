import { FC } from 'react';

import styles from './dashboard-layout.module.css';

const Sidebar: FC = () => {
  return (
    <>
      <div className={styles['sidebar-width-spacing']} />
      <div className={styles.sidebar}>
        <div className={styles['sidebar-header']}>
          <p>Sidebar</p>
        </div>
        <div className={styles['sidebar-content']}>
          <p>
            <a href="/dashboard">Dashboard</a>
          </p>
          <p>
            <a href="/services">Services</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
