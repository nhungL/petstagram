import { Avatar, Button, Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStyles from "./Style";

export default function FriendCard(props) {
  const classes = useStyles();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    setFollow(props.follow);
  }, [props]);
  console.log(follow);

  const handleFollow = async () => {
    //follow user
    if (!follow) {
      setFollow(true);
      axios.all([
        axios.put("/api/users/followers", {
          id: props.id,
          follow: userInfo._id,
        }),
        axios.put("/api/users/following", {
          id: userInfo._id,
          followed: props.id,
        }),
      ]);
    }
    //unfollow user
    else {
      setFollow(false);
      axios.all([
        axios.put("/api/users/unfollowers", {
          id: props.id,
          follow: userInfo._id,
        }),
        axios.put("/api/users/unfollowing", {
          id: userInfo._id,
          followed: props.id,
        }),
      ]);
    }
  };

  return (
    <div>
      <Grid container justifyContent="center">
        <Card variant="outlined" className={classes.card}>
          <Grid container direction="row">
            <Grid item>
              <Avatar
                sx={{ width: 60, height: 60 }}
                className={classes.avatar}
                src={props.avatar}
              ></Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.name}>
                {props.firstname} {props.lastname}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.button}
                onClick={handleFollow}
              >
                {follow ? "UNFOLLOW" : "FOLLOW"}
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}
