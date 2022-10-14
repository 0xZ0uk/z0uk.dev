import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Button from "../Button";
import styles from "./index.module.scss";

type Props = {
  toggleMenu: (value: boolean) => void;
};

const Megamenu: React.FC<Props> = ({ toggleMenu }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menuHeader}>
        <h3 className={styles.logo}>
          <Link href='/'>Z_0</Link>
        </h3>
        <IoClose
          className={styles.closeMenu}
          onClick={() => toggleMenu(false)}
        />
      </div>
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
        <div className={styles.menuIcons}>
          <li className={styles.menuIcon}>
            <a
              href='https://twitter.com/pedrsntana'
              target='_blank'
              rel='noreferrer'
            >
              <FaTwitter />
            </a>
          </li>
          <li className={styles.menuIcon}>
            <a
              href='https://www.linkedin.com/in/pedrsantana/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin />
            </a>
          </li>
          <li className={styles.menuIcon}>
            <a
              href='https://github.com/0xZ0uk'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Megamenu;
