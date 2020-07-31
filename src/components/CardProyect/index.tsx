import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export interface CardProyectProps {
  title: string;
  description: string;
  img: string;
  urlGithub: string;
  urlWeb: string;
}

const CardProyect: React.SFC<CardProyectProps> = (props) => {
  const { title, description, img, urlGithub, urlWeb } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {urlGithub && (
          <Button
            size="small"
            color="secondary"
            onClick={() => window.open(urlGithub)}
          >
            GitHub
          </Button>
        )}
        {urlWeb && (
          <Button
            size="small"
            color="secondary"
            onClick={() => window.open(urlWeb)}
          >
            Url web
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CardProyect;
