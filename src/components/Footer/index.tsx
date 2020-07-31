import * as React from "react";
//Data
import { data } from "./data";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#2C2648",
    boxSizing: "border-box",
    paddingBottom: theme.spacing(8),
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      justify="center"
      direction="column"
      alignItems="center"
      className={classes.container}
    >
      <Typography variant="h4" className={classes.title}>
        Social networks
      </Typography>
      <Grid container spacing={0} justify="center">
        {data.map((dato, i) => (
          <Grid item key={i} xs={12} md={2} justify="center" container>
            <Chip
              avatar={<Avatar alt={dato.text} src={dato.img} />}
              label={dato.text}
              onClick={() => {
                window.open(dato.url);
              }}
              color="secondary"
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Footer;
