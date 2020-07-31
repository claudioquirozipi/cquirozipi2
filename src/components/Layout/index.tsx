import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Footer from "../Footer";
import Navbar from "../Navbar";

export interface LayoutProps {
  children: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(10),
  },
}));

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container className={classes.root}>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
