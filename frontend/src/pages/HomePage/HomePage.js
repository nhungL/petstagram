import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "./Style";
import Post from "../../components/Post/Post";
import Feed from "../../components/Feed/Feed";
import Chat from "../../components/Chat/Chat";

const HomePage = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.background}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <div className={classes.titleWrapper}>
          <Typography variant="h6" className={classes.title}>
            News Feed
          </Typography>
        </div>
        <Grid container direction="row">
          <Grid container direction="column" sm={true}>
            <Grid item xs className={classes.item}>
              <div>
                <Typography variant="h6" align="left" className={classes.title}>
                  Post
                </Typography>
                <Post />
              </div>
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
      {/* <div>
          <Avatar></Avatar>
          <TextField></TextField>
          <hr />
          <Typography>Picture</Typography>
          <Typography>Video</Typography>
          <Button>Post</Button>
        </div> */}
    </div>
  );
};

export default HomePage;
