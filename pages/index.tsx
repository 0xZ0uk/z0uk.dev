import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Cell } from "@faceless-ui/css-grid";
import Post from "../components/Post";
import styles from "../styles/Home.module.scss";
import { GoBeaker } from "react-icons/go";
import { IoConstruct } from "react-icons/io5";
import Section from "../components/Section";
import Featured from "../components/Featured";
import { getPages, getPosts } from "../utils/ghost";
import Footer from "../components/Footer";
import { convertDate } from "../utils/date";
import Project from "../components/Project";

const Home = (props: any) => {
  const { posts = [], projects = [] } = props;

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
        <Cell cols={8}>
          <Grid>
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
                    category={post.tags[0]}
                    description={post.excerpt}
                    slug={post.slug}
                    date={convertDate(post.updated_at)}
                  />
                </Cell>
              ))}
            </Section>
          </Grid>
        </Cell>
        <Cell cols={4}>
          <Grid>
            <Section
              title='Projects'
              icon={<IoConstruct style={{ marginRight: 20 }} />}
            >
              {projects.map((post: any) => (
                <Cell key={post.id} cols={12}>
                  <Project
                    key={post.id}
                    title={post.title}
                    state={post.tags[0]?.name}
                    description={post.excerpt}
                    slug={post.slug}
                  />
                </Cell>
              ))}
            </Section>
          </Grid>
        </Cell>
      </Grid>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getPosts("2");
  const projects = await getPages();

  if (!posts) {
    return {
      notFoundPosts: true,
    };
  }

  if (!projects) {
    return {
      notFoundProjects: true,
    };
  }

  return {
    props: { posts, projects },
  };
}

export default Home;
