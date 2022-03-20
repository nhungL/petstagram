import React from "react";
import useStyles from "./Style";
import { Container, Avatar, Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Chat from "../../components/Chat/Chat";
import Post from "../../components/Post/Post";
import Feed from "../../components/Feed/Feed";

export default function ProfilePage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container className={classes.background}>
        <Grid container spacing={0} justifyContent="center">
          <Avatar src="/static/images/avatar/2.jpg" className={classes.avatar}>
            NL
          </Avatar>
        </Grid>
        <h3>Nhung Luong</h3>
        <h5># of friends here</h5>

        <Grid container direction="row" spacing={0}>
          <Grid
            item
            sm={true}
            className={classes.item}
            style={{ marginRight: "30px" }}
          >
            <Typography variant="h6" align="left" className={classes.title}>
              Intro
            </Typography>
            <Typography className={classes.subtitle} align="left">
              Tell others more about you. (nickname, hobbies, age, location,
              etc.)
            </Typography>
            <Typography className={classes.subtitle} align="left">
              Join since ...
            </Typography>

            <Typography sx={{ marginLeft: "20px" }}>
              <Typography
                className={classes.introdata}
                align="left"
                marginBottom="10px"
              >
                <CircleIcon
                  className={classes.circleicon}
                  sx={{ color: "red" }}
                />
                <span>Posts</span>
                <Typography className={classes.introdata}>#posts</Typography>
              </Typography>

              <Typography
                className={classes.introdata}
                align="left"
                marginBottom="10px"
              >
                <CircleIcon
                  className={classes.circleicon}
                  sx={{ color: "pink" }}
                />
                <span>Following</span>
                <Typography className={classes.introdata}>
                  #following
                </Typography>
              </Typography>

              <Typography
                className={classes.introdata}
                align="left"
                marginBottom="10px"
              >
                <CircleIcon
                  className={classes.circleicon}
                  sx={{ color: "green" }}
                />
                <span>Followers</span>
                <Typography className={classes.introdata}>
                  #followers
                </Typography>
              </Typography>

              <Typography
                className={classes.introdata}
                align="left"
                marginBottom="10px"
              >
                <CircleIcon
                  className={classes.circleicon}
                  sx={{ color: "yellow" }}
                />
                <span>Likes</span>
                <Typography className={classes.introdata}>#likes</Typography>
              </Typography>
            </Typography>
          </Grid>

          <Grid container direction="column" sm={12} md={6}>
            <Grid item xs className={classes.item}>
              <Post />
            </Grid>
            <Grid>
              <Feed />
            </Grid>
          </Grid>
          <Grid>
            <Chat />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
