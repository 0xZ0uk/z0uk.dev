import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

const Footer: React.FC = () => (
  <div className={styles.footer}>
    <Link href='https://z0uk.xyz'>
      <p>Made with ♡ by Z_0</p>
    </Link>
  </div>
);

export default Footer;
