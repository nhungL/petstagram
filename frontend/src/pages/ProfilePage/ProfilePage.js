import React from "react";
import useStyles from "./Style";
import { AvatarGroup, Container, Avatar, Grid } from "@mui/material";
import Introduction from "../../components/Introduction/Introduction";
import Chat from "../../components/Chat/Chat";
import Post from "../../components/Post/Post";
import Feed from "../../components/Feed/Feed";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfilePage() {
  const classes = useStyles();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [user, setUser] = useState({});
  const userId = useParams().id;
  // console.log(userId);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [userId]);

  return (
    <div className={classes.background}>
      <AppBarContent />
      <Container>
        <Grid container spacing={0} justifyContent="center">
          <Avatar src={user.avatar} className={classes.avatar}></Avatar>
        </Grid>
        <h3>
          {user.firstname} {user.lastname}
        </h3>
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
              <Feed userId={userId}/>
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
