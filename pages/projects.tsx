import { Cell, Grid } from "@faceless-ui/css-grid";
import ProjectSingle from "../components/Project";

const Projects = (props: any) => {
  return (
    <Grid>
      <Cell cols={6}>
        <ProjectSingle
          title='Project PassPortfolio'
          state='WIP'
          description='Bringing portfolios, blogs and shops to aspiring professionals.'
        />
      </Cell>
    </Grid>
  );
};

export default Projects;
