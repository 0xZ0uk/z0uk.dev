import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  label: string;
  type?: "outline" | "filled" | "beseled";
  link?: string;
};

const Button: React.FC<Props> = ({ label, type = "filled", link }) => {
  const labelLink = !!link ? <Link href={link}>{label}</Link> : label;

  if (type == "outline") {
    return <button className={styles.outline}>{label}</button>;
  }

  if (type == "beseled") {
    return <button className={styles.beseled}>{labelLink}</button>;
  }

  return <button className={styles.filled}>{label}</button>;
};

export default Button;
