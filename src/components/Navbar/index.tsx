import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Sidebar from "../Sidebar";
import avatarImg from "../../img/avatar.jpg";

export interface NavbarProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#2C2648",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    marginRight: theme.spacing(2),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Avatar
            alt="Cquirozipi"
            src={avatarImg}
            sizes="2rem"
            className={classes.avatar}
          />
          <Typography variant="h6" color="primary" className={classes.title}>
            Cquirozipi
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
