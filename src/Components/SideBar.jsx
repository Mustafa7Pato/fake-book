import {
  AccountBox,
  Article,
  Groups,
  Home,
  LightMode,
  ModeNight,
  Person,
  Settings,
  Store,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
const listItems = [
  { id: 1, title: "Homepage", icon: <Home />, href: "#home" },
  { id: 2, title: "Pages", icon: <Article />, href: "#pages" },
  { id: 3, title: "Groups", icon: <Groups />, href: "#groups" },
  { id: 4, title: "Marketplace", icon: <Store />, href: "#store" },
  { id: 5, title: "Friends", icon: <Person />, href: "#friends" },
  { id: 6, title: "Settings", icon: <Settings />, href: "#settings" },
  { id: 7, title: "Profile", icon: <AccountBox />, href: "#profile" },
];
const SideBar = ({ setMode, mode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List component="nav" aria-label="main mailbox folders">
          {listItems.map((ls) => {
            return (
              <ListItem key={ls.id} sx={{ mb: -2 }}>
                <ListItemButton LinkComponent="a" href={ls.href}>
                  <ListItemIcon>{ls.icon}</ListItemIcon>
                  <ListItemText primary={ls.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem sx={{ mb: -2 }}>
            <ListItemButton>
              <ListItemIcon>
                {mode === "light" ? <ModeNight /> : <LightMode />}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Switch
                    onChange={(e) =>
                      setMode(mode === "light" ? "dark" : "light")
                    }
                  />
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
