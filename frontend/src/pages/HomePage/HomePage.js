import React from "react";
import useStyles from "./Style";
import { Container, Grid, Typography } from "@mui/material";
import Post from "../../components/Post/Post";
import Feed from "../../components/Feed/Feed";
import Chat from "../../components/Chat/Chat";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <AppBarContent />
      <Container className={classes.container}>
        <div className={classes.titleWrapper}>
          <Typography variant="h6" className={classes.title}>
            News Feed
          </Typography>
        </div>
        <Grid container direction="row">
          <Grid container direction="column" sm>
            <Grid>
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
};

export default HomePage;
