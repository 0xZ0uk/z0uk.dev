import { Cell } from "@faceless-ui/css-grid";
import React, { StyleHTMLAttributes } from "react";
import { GoBeaker } from "react-icons/go";
import styles from "./index.module.scss";

type Props = {
  className?: any;
  children?: any;
  title: string;
  style?: any;
  icon?: JSX.Element;
};

const Section: React.FC<Props> = ({
  children,
  className,
  title,
  icon,
  style,
}) => (
  <>
    <Cell cols={12}>
      <h4 className={styles.sectionTitle} style={style}>
        {!!icon && <span className={styles.sectionIcon}>{icon}</span>}
        {title}
      </h4>
    </Cell>
    {children}
  </>
);

export default Section;
