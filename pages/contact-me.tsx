import { Cell, Grid } from "@faceless-ui/css-grid";
import type { NextPage } from "next";
import Head from "next/head";
import IconFrame from "../components/IconFrame";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Contact.module.scss";

const ContactMe: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me - Pedro Santana</title>
      </Head>
      <Grid>
        <Cell cols={12}>
          <h2 className={styles.title}>
            If you wish to contact me, you can do so at{" "}
            <span className={styles.underline}>pedrosantana@duck.com</span>, or
            just DM me on Twitter/LinkedIn:
          </h2>
          <div className={styles.iconContainer}>
            <IconFrame
              icon={<FaTwitter />}
              link='https://twitter.com/pedrsntana'
            />
            <IconFrame
              icon={<FaLinkedin />}
              link='https://www.linkedin.com/in/pedrsantana/'
            />
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default ContactMe;
