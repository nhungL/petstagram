import React from "react";
import useStyles from "./Style";
import { AvatarGroup, Container, Avatar, Grid } from "@mui/material";
import Introduction from "../../components/Introduction/Introduction";
import Chat from "../../components/Chat/Chat";
import Post from "../../components/Post/Post";
import Feed from "../../components/Feed/Feed";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";

export default function ProfilePage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <AppBarContent />
      <Container>
        <Grid container spacing={0} justifyContent="center">
          <Avatar src="not-found-image.png" className={classes.avatar}>
            NL
          </Avatar>
        </Grid>
        <h3>Nhung Luong</h3>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <AvatarGroup max={4}>
            <Avatar alt="Thuy Le" src="YourPicturePath" />
            <Avatar alt="Nhung Luong" src="YourPicturePath" />
            <Avatar alt="Truc Phan" src="YourPicturePath" />
            <Avatar alt="Gourav" src="YourPicturePath" />
            <Avatar alt="Harrier" src="YourPicturePath" />
          </AvatarGroup>
        </div>

        <Grid container direction="row" spacing={0}>
          <Grid item xs={12} md={3}>
            <Introduction />
          </Grid>

          <Grid container direction="column" xs={12} md={5.5}>
            <Grid item>
              <Post />
            </Grid>
            <Grid item>
              <Feed />
            </Grid>
          </Grid>

          <Grid item xs={12} md={3}>
            <Chat />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
