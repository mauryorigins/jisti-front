import { FC } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/dashboard">Dashboard</Link>
          </p>
          <p>
            <Link to="/services">Services</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
