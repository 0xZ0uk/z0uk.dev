import { Cell } from "@faceless-ui/css-grid";
import React from "react";
import { GoBeaker } from "react-icons/go";
import styles from "./index.module.scss";

type Props = {
  children?: any;
  title: string;
  icon?: JSX.Element;
};

const Section: React.FC<Props> = ({ children, title, icon }) => (
  <>
    <Cell cols={12}>
      <h4 className={styles.sectionTitle}>
        {icon}
        {title}
      </h4>
    </Cell>
    {children}
  </>
);

export default Section;
