import * as React from "react";
import { Link } from "react-router-dom";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CategoryIcon from "@material-ui/icons/Category";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

export interface SidebarProps {
  open: boolean;
  onClose(e: any): void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props: any) {
  const { icon, primary, to } = props;

  const CustomLink = (props: any) => <Link to={to} {...props} />;

  return (
    <ListItem button component={CustomLink}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { open, onClose } = props;
  const classes = useStyles();

  return (
    <Drawer open={open} onClose={onClose}>
      <List component="nav" className={classes.root}>
        <ListItemLink primary="Home" to="/" icon={<HomeIcon />} />
        <ListItemLink primary="Projects" to="/projects" icon={<WorkIcon />} />
        <ListItemLink
          primary="Technologies"
          to="/technologies"
          icon={<CategoryIcon />}
        />
      </List>
    </Drawer>
  );
};

export default Sidebar;
