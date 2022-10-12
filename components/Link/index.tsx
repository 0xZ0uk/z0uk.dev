import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  label: string;
  type?: "outline" | "filled";
  to: string;
};

const CustomLink: React.FC<Props> = ({ label, type = "filled", to }) => {
  if (type == "outline") {
    return (
      <Link href={to}>
        <a className={styles.outline}>{label}</a>
      </Link>
    );
  }

  return (
    <Link href={to}>
      <a className={styles.filled}>{label}</a>
    </Link>
  );
};

export default CustomLink;
