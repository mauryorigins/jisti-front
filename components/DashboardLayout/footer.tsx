import { FC } from 'react';

import styles from './dashboard-layout.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Onephase Dashboard &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
