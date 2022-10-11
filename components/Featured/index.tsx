import { Cell } from "@faceless-ui/css-grid";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  mul?: 1 | 2 | 3;
};

const Featured: React.FC<Props> = ({ mul = 3 }) => (
  <Cell cols={1} className={styles.container} style={{ height: 170 * mul }}>
    <div></div>
  </Cell>
);

export default Featured;
