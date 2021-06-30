import { FC } from 'react';

import styles from './dashboard-layout.module.css';

const Navbar: FC = () => {
  return (
    <>
      <div className={styles['navbar-height-spacing']} />
      <header className={styles.navbar}>
        <p>Header</p>
      </header>
    </>
  );
};

export default Navbar;
