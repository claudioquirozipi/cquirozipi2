import * as React from "react";
import { Link } from "react-router-dom";

import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CategoryIcon from "@material-ui/icons/Category";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import Switch from "@material-ui/core/Switch";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { useTheme } from "../../useCase/theme";
import Divider from "@material-ui/core/Divider";

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
  const { toggleTheme, setToggleTheme } = useTheme();

  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <List component="nav" className={classes.root}>
        <ListItem>
          <ListSubheader>Menu</ListSubheader>
        </ListItem>
        <Divider />
        <ListItemLink primary="Home" to="/" icon={<HomeIcon />} />
        <ListItemLink primary="Projects" to="/projects" icon={<WorkIcon />} />
        <ListItemLink
          primary="Technologies"
          to="/technologies"
          icon={<CategoryIcon />}
        />
        <ListItemLink
          primary="Certificates"
          to="/certificates"
          icon={<AssignmentTurnedInIcon />}
        />
      </List>
      <Divider />
      <ListItem>
        <ListItemText primary={"Theme"} />
        <Switch
          value={toggleTheme}
          checked={toggleTheme}
          onChange={() => setToggleTheme((s: any) => !s)}
          inputProps={{ "aria-label": "" }}
        />
      </ListItem>
    </Drawer>
  );
};

export default Sidebar;
