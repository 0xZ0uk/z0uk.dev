import { Cell, Grid } from "@faceless-ui/css-grid";
import Head from "next/head";
import { useEffect } from "react";
import ProjectSingle from "../../components/Project";
import { getPages } from "../../utils/ghost";

const Projects = (props: any) => {
  const { projects } = props;

  return (
    <>
      <Head>
        <title>Projects - Pedro Santana</title>
      </Head>
      <Grid>
        {projects.map((proj: any) => (
          <Cell cols={6} key={proj.id}>
            <ProjectSingle
              title={proj.title}
              state={proj.tags[0]?.name}
              description={proj.excerpt}
              slug={proj.slug}
            />
          </Cell>
        ))}
      </Grid>
    </>
  );
};

export async function getStaticProps() {
  const projects = await getPages();

  return {
    props: { projects },
  };
}

export default Projects;
