import React from 'react';
import styles from './index.module.scss';

type Props = {
  children?: JSX.Element
};

const Header: React.FC<Props> = ({ children }) => (
  <div className={styles.header}>
    <h3 className={styles.logo}>Z_0</h3>
    <ul className={styles.menu}>
      <li className={styles.menuItem}>Home</li>
      <li className={styles.menuItem}>Work</li>
      <li className={styles.menuItem}>Projects</li>
      <li className={styles.menuItem}>Lab</li>
    </ul>
  </div>
);

export default Header;
