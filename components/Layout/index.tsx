import React from "react";
import { Grid, Cell } from "@faceless-ui/css-grid";

import Header from "../Header";
import styles from "./index.module.scss";
import BG from "../BG";
import Megamenu from "../Megamenu";

type Props = {
  children: any;
  type?: "page" | "post" | "project";
};

const Layout: React.FC<Props> = ({ children, type }) => {
  const [mega, toggleMega] = React.useState(false);

  switch (type) {
    case "project":
      return (
        <React.Fragment>
          {!!mega && <Megamenu toggleMenu={toggleMega} />}
          <div className={styles.projectSingleContainer}>
            <div className={styles.headerWrapper}>
              <Header toggleMenu={toggleMega} />
            </div>
            <Grid className={styles.mainContainer}>
              <Cell cols={12}>{children}</Cell>
            </Grid>
          </div>
        </React.Fragment>
      );
    case "post":
      return (
        <React.Fragment>
          <div className={styles.postSingleContainer}>
            <div className={styles.headerWrapper}>
              <Header toggleMenu={toggleMega} />
            </div>
            <Grid className={styles.mainContainer}>
              <Cell cols={12}>{children}</Cell>
            </Grid>
          </div>
          {!!mega && <Megamenu toggleMenu={toggleMega} />}
        </React.Fragment>
      );
    case "page":
    default:
      return (
        <React.Fragment>
          <div className={styles.main}>
            <Header toggleMenu={toggleMega} />
            <Grid className={styles.mainContainer}>
              <Cell cols={12}>{children}</Cell>
            </Grid>
          </div>
          {!!mega && <Megamenu toggleMenu={toggleMega} />}
          <BG />
        </React.Fragment>
      );
  }
};

export default Layout;
