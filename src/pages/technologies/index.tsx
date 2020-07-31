import * as React from "react";

import Layout from "../../components/Layout";
import { makeStyles } from "@material-ui/core/styles";

import { data } from "./data";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

interface iData {
  title: string;
  icon: string;
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  avatar: {
    objectFit: "contain",
    objectPosition: "center",
    borderRadius: "50%",
  },
}));

function Technologies() {
  const classes = useStyles();

  return (
    <Layout>
      <Typography variant="h3" color="initial" className={classes.title}>
        Technologies
      </Typography>

      <Grid container spacing={2}>
        {data.map((data: iData, i: number) => {
          return (
            <Grid item xs={6} sm={4} md={2}>
              {/* <TechnologieContainer key={i}>
                <img src={data.icon} alt={data.title} />
                <p>{data.title}</p>
              </TechnologieContainer> */}
              <Chip
                avatar={
                  <img
                    alt={data.title}
                    src={data.icon}
                    className={classes.avatar}
                  />
                }
                label={data.title}
                onClick={() => {}}
                variant="outlined"
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}

export default Technologies;
