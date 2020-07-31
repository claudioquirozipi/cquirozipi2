import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import word from "../img/work.svg";
import cube from "../img/cube.png";
import draw from "../img/drawCss.png";
import phaser from "../img/phaser.png";
import speedSeoImg from "../img/speedSeo.png";
import Typography from "@material-ui/core/Typography";
import ABChildren from "../components/ABChildren";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "auto",
    maxHeight: "50vh",
    objectFit: "contain",
    objectPosition: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2, 0),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  text: {
    margin: theme.spacing(1, 0),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <ABChildren A={<img src={word} className={classes.img} alt="" />} reverse>
        <Typography className={classes.title} variant="h3" color="secondary">
          About me
        </Typography>
        <Typography className={classes.text} variant="body1" color="initial">
          I am an engineer in industrial processes passionate about frontend web
          development
        </Typography>
        <Typography className={classes.text} variant="body1" color="initial">
          I have more than 3 years in frontend development.
        </Typography>
        <Typography className={classes.text} variant="body1" color="initial">
          And my specialty is working with react.
        </Typography>
      </ABChildren>

      <ABChildren A={<img src={phaser} className={classes.img} alt="" />}>
        <Typography className={classes.title} variant="h3" color="secondary">
          Game
        </Typography>
        <Typography variant="body1" color="initial">
          Game made with the phaser library.
        </Typography>
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.open("https://hola2-fd53e.web.app/");
            }}
          >
            Go to
          </Button>
        </Box>
      </ABChildren>

      <ABChildren A={<img src={cube} className={classes.img} alt="" />} reverse>
        <Typography className={classes.title} variant="h3" color="secondary">
          css
        </Typography>
        <Typography variant="body1" color="initial">
          A 3d cube made with html and css
        </Typography>
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.open("https://codepen.io/claudioquirozipi/pen/PLbBYG");
            }}
          >
            Go to
          </Button>
        </Box>
      </ABChildren>

      <ABChildren A={<img src={draw} className={classes.img} alt="" />}>
        <Typography className={classes.title} variant="h3" color="secondary">
          drawing css
        </Typography>
        <Typography variant="body1" color="initial">
          A drawing made with html and css
        </Typography>
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.open("https://codepen.io/claudioquirozipi/pen/ROjqvb");
            }}
          >
            Go to
          </Button>
        </Box>
      </ABChildren>

      <ABChildren
        A={<img src={speedSeoImg} className={classes.img} alt="" />}
        reverse
      >
        <Typography className={classes.title} variant="h3" color="secondary">
          Seo
        </Typography>
        <Typography variant="body1" color="initial">
          Maximum performance in load times and seo with Gatsby
        </Typography>
      </ABChildren>
    </Layout>
  );
}

export default Home;
