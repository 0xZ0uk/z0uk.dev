import React from "react";
import styles from "./index.module.scss";

type Props = {
  icon: React.ReactElement;
  link?: string;
};

const IconFrame: React.FC<Props> = ({ icon, link }) => {
  const iconLink = !!link ? <a href={link}>{icon}</a> : icon;

  return <div className={styles.container}>{iconLink}</div>;
};

export default IconFrame;
