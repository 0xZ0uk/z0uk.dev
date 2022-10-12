import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Cell } from "@faceless-ui/css-grid";
import Post from "../components/Post";
import styles from "../styles/Home.module.scss";
import { GoBeaker } from "react-icons/go";
import Section from "../components/Section";
import Featured from "../components/Featured";
import { getPosts } from "../utils/ghost";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { convertDate } from "../utils/date";

const Home = (props: any) => {
  const { posts = [] } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Pedro Santana - portfolio & blog</title>
      </Head>
      <Grid>
        <Cell
          cols={12}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "5.5rem",
          }}
        >
          <h2 className={styles.tagline}>
            Hello, <em>I&apos;m Pedro Santana,</em> a Frontend developer from
            Portugal
          </h2>
          <div className={styles.featured}>
            <Featured mul={2} />
            <Featured />
            <Featured mul={1} />
          </div>
        </Cell>
        <Section
          title='Articles'
          icon={<GoBeaker style={{ marginRight: 20 }} />}
        >
          {posts.map((post: any) => (
            <Cell key={post.id} cols={4}>
              <Post
                key={post.id}
                title={post.title}
                author={post.authors[0].name}
                category={post.tags[0]?.name}
                description={post.excerpt}
                slug={post.slug}
                date={convertDate(post.updated_at)}
              />
            </Cell>
          ))}
        </Section>
      </Grid>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

export default Home;
