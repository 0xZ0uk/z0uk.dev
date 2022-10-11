import React from "react";
import { Grid, Cell } from "@faceless-ui/css-grid";

import Header from "../Header";
import styles from "./index.module.scss";
import BG from "../BG";

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <div className={styles.main}>
      <Header />
      <Grid className={styles.mainContainer}>
        <Cell cols={12}>{children}</Cell>
      </Grid>
    </div>
    <BG />
  </React.Fragment>
);

export default Layout;
