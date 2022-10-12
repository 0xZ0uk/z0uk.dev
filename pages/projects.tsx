import { Cell, Grid } from "@faceless-ui/css-grid";
import Head from "next/head";
import ProjectSingle from "../components/Project";

const Projects = (props: any) => {
  return (
    <>
      <Head>
        <title>Projects - Pedro Santana</title>
      </Head>
      <Grid>
        <Cell cols={6}>
          <ProjectSingle
            title='Project PassPortfolio'
            state='WIP'
            description='Bringing portfolios, blogs and shops to aspiring professionals.'
          />
        </Cell>
      </Grid>
    </>
  );
};

export default Projects;
