import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  label: string;
  type?: "outline" | "filled" | "animated";
  link?: string;
};

const Button: React.FC<Props> = ({ label, type = "filled", link }) => {
  const labelLink = !!link ? <Link href={link}>{label}</Link> : label;

  if (type == "outline") {
    return <button className={styles.outline}>{labelLink}</button>;
  }

  if (type == "animated") {
    return <button className={styles.animated}>{labelLink}</button>;
  }

  return <button className={styles.filled}>{labelLink}</button>;
};

export default Button;
