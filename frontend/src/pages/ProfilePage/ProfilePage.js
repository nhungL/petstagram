import React from "react";
import useStyles from "./Style";
import { Container, Avatar, Grid } from "@mui/material";
import Introduction from "../../components/Introduction/Introduction";
import Post from "../../components/Post/Post";
import Feed from "../../components/Feed/Feed";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Followers from "../../components/Followers/Followers";
import Following from "../../components/Following/Following";

export default function ProfilePage() {
  const classes = useStyles();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [user, setUser] = useState({});
  const userId = useParams().id;
  const [isHost, setIsHost] = useState(false);
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      setIsHost(false);
      if (userInfo._id === userId) {
        setIsHost(true);
      }
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data);
      setFollowing(res.data.following);
      setFollowers(res.data.followers);
    };
    fetchUser();
  }, [userId, userInfo._id]);

  return (
    <div className={classes.background}>
      <AppBarContent userId={userId} />
      <Container className={classes.container} maxWidth>
        <Grid container spacing={0} justifyContent="center">
          <Avatar src={user.avatar} className={classes.avatar}></Avatar>
        </Grid>
        <h3>{user.petname}</h3>

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
            <Following following={following} />
            <Followers followers={followers} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
