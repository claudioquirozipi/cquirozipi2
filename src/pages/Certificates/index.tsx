import * as React from "react";

import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Layout from "../../components/Layout";
import { data, course as icourse } from "./data";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export interface CertificatesProps {}

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
    backgroundSize: "contain",
    backgroundPositionY: "top",
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
}));

const Certificates: React.FC<CertificatesProps> = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Typography variant="h3" color="initial" className={classes.title}>
        Certificates
      </Typography>
      <Grid container spacing={4} justify="space-between">
        {data.map((course: icourse, i: number) => (
          <Grid item key={i} xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title={course.certificate.title}
                  image={course.certificate.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {course.certificate.title}
                  </Typography>
                  {course.certificate.description && (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {course.certificate.description}
                    </Typography>
                  )}
                  <Typography variant="body2" color="initial">
                    {course.certificate.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Certificates;
