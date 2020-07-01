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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            alt="Cquirozipi"
            src={avatarImg}
            sizes="2rem"
            className={classes.avatar}
          />
          <Typography variant="h6" className={classes.title}>
            Cquirozipi
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
