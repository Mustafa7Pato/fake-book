import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";

const avatar =
  "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFja2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const menuItems = [
  { id: 1, title: "Profile" },
  { id: 2, title: "My Account" },
  { id: 3, title: "Logout" },
];
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" display={{ xs: "none", sm: "block" }}>
          FakeBook
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={"+99"} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={"+99"} color="error">
            <Notifications />
          </Badge>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {" "}
            <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
          </Button>
        </Icons>
        <UserBox onClick={handleClick}>
          <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
          <Typography variant="span">Mustafa</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {menuItems.map((item) => {
          return (
            <MenuItem key={item.id} onClick={handleClose}>
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
