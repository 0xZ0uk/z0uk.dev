// eslint-disable-next-line @next/next/no-document-import-in-page
import type { NextPage } from "next";
import React from "react";
import { getPosts, getSinglePost } from "../../utils/ghost";
import styles from "../../styles/PostSingle.module.scss";
import { Cell, Grid } from "@faceless-ui/css-grid";
import Section from "../../components/Section";
import Post from "../../components/Post";

const PostSingle = (props: any) => {
  const { post, posts = [] } = props;

  function createMarkup() {
    return { __html: post.html };
  }

  return (
    <div className={styles.container}>
      <Grid>
        <Cell
          cols={12}
          className={styles.hero}
          style={{
            background: `url(${post?.feature_image}) #00000077 no-repeat center`,
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className={styles.heroWrapper}>
            <p>{post.tags[0]?.name}</p>
            <h1>{post.title}</h1>
          </div>
        </Cell>
        <Cell cols={12} className={styles.postMain}>
          <div
            className={styles.htmlWrapper}
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
          <div className={styles.readmoreWrapper}>
            <Section
              title='Read More'
              style={{ color: "#000", marginBottom: "2rem" }}
            >
              <Grid>
                {posts
                  .filter((p: any) => p.id != post.id)
                  .map((p: any) => (
                    <Cell key={p.id} cols={4}>
                      <Post
                        key={p.id}
                        title={p.title}
                        author={p.authors[0].name}
                        category={p.tags[0]?.name}
                        slug={p.slug}
                      />
                    </Cell>
                  ))}
              </Grid>
            </Section>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export async function getStaticProps(ctx: any) {
  const post = await getSinglePost(ctx.params.slug);
  const posts = await getPosts();

  if (!post) return { notFound: true };
  if (!posts) return { morePostsNotFound: true };

  return {
    props: { post, posts },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts?.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export default PostSingle;
