// eslint-disable-next-line @next/next/no-document-import-in-page
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { getPosts, getSinglePost } from "../../utils/ghost";
import styles from "../../styles/PostSingle.module.scss";
import { Cell, Grid } from "@faceless-ui/css-grid";
import Section from "../../components/Section";
import Post from "../../components/Post";
import Head from "next/head";

const PostSingle = (props: any) => {
  const { post, posts = [] } = props;
  const [markup, setMarkup] = useState<any>();

  function createMarkup() {
    setMarkup({ __html: post.html });
  }

  useEffect(() => {
    createMarkup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.html]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title} - Pedro Santana</title>
      </Head>
      <Grid>
        <Cell
          cols={12}
          className={styles.hero}
          style={{
            background: `url(${post?.feature_image}) #00000077 no-repeat center`,
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
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
            dangerouslySetInnerHTML={markup}
          ></div>
          <div className={styles.readmoreWrapper}>
            {posts.length > 1 && (
              <Section
                title='Read More'
                style={{ color: "#000", marginBottom: "2rem" }}
              >
                <Grid>
                  {posts
                    .filter((p: any) => p.id != post.id)
                    .map((p: any) => (
                      <Cell key={p.id} cols={6}>
                        <Post
                          key={p.id}
                          title={p.title}
                          author={p.authors[0].name}
                          category={p.tags[0]}
                          description={p.excerpt}
                          slug={p.slug}
                          date={p.publishedDate}
                        />
                      </Cell>
                    ))}
                </Grid>
              </Section>
            )}
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export async function getStaticProps(ctx: any) {
  const post = await getSinglePost(ctx.params.slug);
  const posts = await getPosts("2");

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
