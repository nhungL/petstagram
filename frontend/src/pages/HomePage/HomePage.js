import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./Style";
import { Container, Grid, Typography } from "@mui/material";
import Post from "../../components/Post/Post";
import Feed from "../../components/Feed/Feed";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";

export default function HomePage() {
  const classes = useStyles();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userId = userInfo._id;

  return (
    <div className={classes.background}>
      <AppBarContent userId={userId} />
      <Container className={classes.container}>
        <div className={classes.titleWrapper}>
          <Typography variant="h6" className={classes.title}>
            News Feed
          </Typography>
        </div>
        <Grid container direction="row">
          <Grid container direction="column" item sm>
            <Grid>
              <Post />
            </Grid>
            <Grid>
              <Feed />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
