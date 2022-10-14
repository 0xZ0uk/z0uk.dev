import React from "react";
import styles from "./index.module.scss";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Button from "../Button";
import Megamenu from "../Megamenu";

type Props = {
  children?: JSX.Element;
  toggleMenu: (value: boolean) => void;
};

const Header: React.FC<Props> = ({ children, toggleMenu }) => {
  return (
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
        <li className={styles.menuItem}>
          <Link href='/posts'>Blog</Link>
        </li>
        <li className={styles.menuItem} style={{ marginRight: "3rem" }}>
          <Button label='Contact Me' type='beseled' link='/contact-me' />
        </li>
        <li className={styles.menuIcon}>
          <a
            href='https://twitter.com/pedrsntana'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitter size={25} />
          </a>
        </li>
        <li className={styles.menuIcon}>
          <a
            href='https://www.linkedin.com/in/pedrsantana/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin size={25} />
          </a>
        </li>
        <li className={styles.menuIcon}>
          <a href='https://github.com/0xZ0uk' target='_blank' rel='noreferrer'>
            <FaGithub size={25} />
          </a>
        </li>
      </ul>
      <div className={styles.megamenu}>
        <FiMenu color='#fff' size={25} onClick={() => toggleMenu(true)} />
      </div>
    </div>
  );
};

export default Header;
