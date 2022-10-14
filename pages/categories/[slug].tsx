import { Cell, Grid } from "@faceless-ui/css-grid";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { GoBeaker } from "react-icons/go";
import Post from "../../components/Post";
import Section from "../../components/Section";
import { convertDate } from "../../utils/date";
import {
  getCategories,
  getCategoryBySlug,
  getPostsByCategory,
} from "../../utils/ghost";

const Category: NextPage = (props: any) => {
  const { category, posts } = props;

  return (
    <div>
      <Head>
        <title>{category.name} - Pedro Santana</title>
      </Head>
      <Grid>
        <Section
          title={category.name}
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
    </div>
  );
};

export async function getStaticProps(ctx: any) {
  const categories = await getCategories();
  const category = await getCategoryBySlug(ctx.params.slug);
  const posts = await getPostsByCategory(ctx.params.slug);

  if (!categories) return { notFound: true };
  if (!category) return { notFound: true };
  if (!posts) return { notFound: true };

  return {
    props: { categories, category, posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();

  const paths = categories?.map((category) => ({
    params: { slug: category.slug },
  }));

  return { paths, fallback: false };
}

export default Category;
