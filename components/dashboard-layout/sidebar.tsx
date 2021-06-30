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
          {[1, 2, 3, 4].map((index) => (
            <p key={index}>Sidebar Content {index}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
