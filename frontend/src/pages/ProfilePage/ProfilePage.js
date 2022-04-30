import React from "react";
import useStyles from "./Style";
import {
  AvatarGroup,
  Container,
  Avatar,
  Grid,
  Typography,
} from "@mui/material";
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
  // console.log(userInfo._id);

  const [user, setUser] = useState({});
  const userId = useParams().id;
  // console.log(userId);

  const [isHost, setIsHost] = useState(false);
  const year = new Date(user.createdAt).getFullYear();

  useEffect(() => {
    const fetchUser = async () => {
      if (userInfo._id === userId) {
        setIsHost(true);
      }
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
        <h3>{user.petname}</h3>
        {/* <div style={{ justifyContent: "center", display: "flex" }}>
          <AvatarGroup max={4}>
            <Avatar alt="Thuy Le" src="YourPicturePath" />
            <Avatar alt="Nhung Luong" src="YourPicturePath" />
            <Avatar alt="Truc Phan" src="YourPicturePath" />
            <Avatar alt="Gourav" src="YourPicturePath" />
            <Avatar alt="Harrier" src="YourPicturePath" />
          </AvatarGroup>
        </div> */}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={classes.intro}>
            <span className={classes.subtitle}>Join since {year}</span>
            <span className={classes.subtitle}>My age: {user.age}</span>
            <span className={classes.subtitle}>My owner: {user.firstname} {user.lastname}</span>
          </div>
        </div>

        <Grid container direction="row" spacing={0}>
          <Grid item xs={12} md={3}>
            <Introduction userId={userId} />
          </Grid>

          <Grid container direction="column" item xs={12} md={5.5}>
            {isHost && (
              <Grid item>
                <Post />
              </Grid>
            )}
            <Grid item>
              <Feed userId={userId} />
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
