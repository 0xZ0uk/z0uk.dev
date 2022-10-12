import React from "react";
import styles from "./index.module.scss";

type Props = {
  label: string;
  type?: "outline" | "filled";
};

const Button: React.FC<Props> = ({ label, type = "filled" }) => {
  if (type == "outline") {
    return <button className={styles.outline}>{label}</button>;
  }

  return <button className={styles.filled}>{label}</button>;
};

export default Button;
