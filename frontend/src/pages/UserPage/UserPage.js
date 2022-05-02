import React, { useState } from "react";
import useStyles from "./Style";
import { AvatarGroup, Container, Avatar, Grid, Button } from "@mui/material";
import Introduction from "../../components/Introduction/Introduction";
import Post from "../../components/Post/Post";
import Feed from "../../components/Feed/Feed";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";

export default function UserPage() {
  const classes = useStyles();
  //get current signed in user
  //get user on this page
  //check if they are already friends
  const [isFriend, setIsFriend] = useState(true);

  const addFriend = () => {
    //TODO: add friend
    setIsFriend(!isFriend);
  };
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
        <p>Breed: Corgi</p>
        <p>Age: 2</p>
        <p>Location: Bay Area, CA</p>
        {!isFriend ? (
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={addFriend}
          >
            Add friend
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={addFriend}
          >
            Friend ✓
          </Button>
        )}

        <Grid container direction="row" spacing={0}>
          <Grid item xs={12} md={3}>
            <Introduction />
          </Grid>

          <Grid>
            <Grid item>
              <Post />
            </Grid>
            <Grid item>
              <Feed />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
