import React from "react";
import styles from "./index.module.scss";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

type Props = {
  children?: JSX.Element;
};

const Header: React.FC<Props> = ({ children }) => (
  <div className={styles.header}>
    <h3 className={styles.logo}>
      <Link href='/'>Z_0</Link>
    </h3>
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <Link href='/'>Home</Link>
      </li>
      <li className={styles.menuItem}>
        <Link href='/projects'>Projects</Link>
      </li>
      <li className={styles.menuItem} style={{ marginRight: "2rem" }}>
        <Link href='/posts'>Blog</Link>
      </li>
      <li className={styles.menuIcon}>
        <Link href='https://twitter.com/pedrsntana' target='_blank'>
          <FaTwitter size={25} />
        </Link>
      </li>
      <li className={styles.menuIcon}>
        <Link href='https://www.linkedin.com/in/pedrsantana/' target='_blank'>
          <FaLinkedin size={25} />
        </Link>
      </li>
      <li className={styles.menuIcon}>
        <Link href='https://github.com/0xZ0uk' target='_blank'>
          <FaGithub size={25} />
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
