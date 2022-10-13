import { Cell, Grid } from "@faceless-ui/css-grid";
import type { NextPage } from "next";
import Head from "next/head";
import { GoBeaker } from "react-icons/go";
import Post from "../../components/Post";
import Section from "../../components/Section";
import { convertDate } from "../../utils/date";
import { getPosts } from "../../utils/ghost";

const Blog = (props: any) => {
  const { posts = [] } = props;

  return (
    <div>
      <Head>
        <title>Blog - Pedro Santana</title>
      </Head>
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
                category={post.tags[0]?.name}
                description={post.excerpt}
                slug={post.slug}
                date={convertDate(post.updated_at)}
              />
            </Cell>
          ))}
        </Section>
      </Grid>
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

export default Blog;
