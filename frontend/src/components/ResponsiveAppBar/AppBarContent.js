import React, { useState } from "react";
import useStyles from "./Style";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/logOut";

export default function AppBarContent() {
  const classes = useStyles();
  const [openSettings, setOpenSettings] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <AppBar position="static" className={classes.appbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/home" style={{ textDecoration: "None" }}>
              <img src="../Logo.png" alt="logo" width="150" height="auto" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/home" className={classes.link}>
              <Button
                key="feed"
                sx={{
                  my: 2,
                  marginLeft: "20px",
                  fontWeight: "bold",
                  color: "#FFB2A6",
                  display: "block",
                }}
              >
                Feed
              </Button>
            </Link>

            <Link to="/map" className={classes.link}>
              <Button
                key="map"
                sx={{
                  my: 2,
                  marginLeft: "20px",
                  fontWeight: "bold",
                  color: "#FFB2A6",
                  display: "block",
                }}
              >
                Map
              </Button>
            </Link>

            <Link to="/about-us" className={classes.link}>
              <Button
                key="aboutus"
                sx={{
                  my: 2,
                  marginLeft: "20px",
                  fontWeight: "bold",
                  color: "#FFB2A6",
                  display: "block",
                }}
              >
                About Us
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={() => setOpenSettings(!openSettings)} sx={{ p: 0 }}>
                <Avatar
                  alt="User Avatar"
                  src="https://marketplace.canva.com/EAEeO4U2XBM/1/0/1600w/canva-pink-and-yellow-cat-modern-hand-drawn-abstract-twitch-profile-picture--lGNrdmHvS4.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openSettings}
              onClose={() => setOpenSettings(false)}
            >
              <Link to={`/profile/${userInfo._id}`} className={classes.link}>
                <MenuItem key="profile">
                  <Typography textAlign="center" style={{ color: "black" }}>
                    Profile
                  </Typography>
                </MenuItem>
              </Link>

              <Link to="/settings" className={classes.link}>
                <MenuItem key="settings">
                  <Typography textAlign="center" className={classes.menuItem}>
                    Settings
                  </Typography>
                </MenuItem>
              </Link>

              <MenuItem key="logout">
                <Link
                  to="/signin"
                  onClick={signoutHandler}
                  className={classes.link}
                >
                  <Typography textAlign="center" className={classes.menuItem}>
                    Logout
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
