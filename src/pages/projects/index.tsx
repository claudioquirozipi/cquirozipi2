import * as React from "react";

import { data } from "./data";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardProyect from "../../components/CardProyect";
import Layout from "../../components/Layout";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <Layout>
      <Typography variant="h3" color="initial" className={classes.title}>
        Projects
      </Typography>
      <Grid container spacing={6} justify="center">
        {data.map((data, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <CardProyect
                title={data.title}
                description={data.description}
                img={data.img}
                urlGithub={data.urlGithub}
                urlWeb={data.urlWeb}
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}

export default Projects;
