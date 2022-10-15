import { Cell, Grid } from "@faceless-ui/css-grid";
import Head from "next/head";
import { useEffect } from "react";
import { getPageBySlug, getPages } from "../../utils/ghost";
import styles from "../../styles/ProjectSingle.module.scss";

const ProjectBySlug = (props: any) => {
  const { project = [], projects } = props;

  useEffect(() => {
    console.log("projects::", projects);
  }, [projects]);

  function createMarkup() {
    return { __html: project.html };
  }

  return (
    <>
      <Head>
        <title>{project.title} - Pedro Santana</title>
      </Head>
      <Grid className={styles.container}>
        <Cell
          cols={12}
          className={styles.hero}
          style={{
            background: `url(${project?.feature_image}) rgba(0,0,0, 0.65) no-repeat center`,
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className={styles.heroWrapper}>
            <p>Project</p>
            <h1>{project.title}</h1>
          </div>
          <div>
            <div
              className={styles.htmlWrapper}
              dangerouslySetInnerHTML={createMarkup()}
            ></div>
          </div>
        </Cell>
      </Grid>
    </>
  );
};

export async function getStaticProps(ctx: any) {
  const project = await getPageBySlug(ctx.params.slug);
  const projects = await getPages();

  return {
    props: { project, projects },
  };
}

export async function getStaticPaths() {
  const projects = await getPages();

  const paths = projects?.map((proj) => ({
    params: { slug: proj.slug },
  }));

  return { paths, fallback: false };
}

export default ProjectBySlug;
