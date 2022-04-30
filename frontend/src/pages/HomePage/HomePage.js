import React, { useState } from "react";
import { useSelector } from "react-redux";
import useStyles from "./Style";
import {
  Alert,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Post from "../../components/Post/Post";
import Feed from "../../components/Feed/Feed";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import {
  MessageLeft,
  MessageRight,
} from "../../components/ChatBubble/ChatBubble";
import { Close, Send } from "@mui/icons-material";
import { styled } from "@mui/styles";

//test data
const Users = [
  {
    id: 1,
    profilePicture: "no-profile-picture.png",
    username: "Safak Kocaoglu",
  },
  {
    id: 2,
    profilePicture: "https://wallpaperaccess.com/full/6295120.jpg",
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: "no-profile-picture.png",
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: "https://pbs.twimg.com/media/DxRCJxmWsAA2yqi.jpg",
    username: "Dora Hawks",
  },
  {
    id: 5,
    profilePicture: "no-profile-picture.png",
    username: "Thomas Holden",
  },
  {
    id: 6,
    profilePicture: "no-profile-picture.png",
    username: "Shirley Beauchamp",
  },
  {
    id: 7,
    profilePicture: "no-profile-picture.png",
    username: "Travis Bennett",
  },
  {
    id: 8,
    profilePicture:
      "https://dthezntil550i.cloudfront.net/ou/latest/ou2009170412086260016840777/1280_960/c446f863-b1b3-47fb-b2ea-87a6aaa9b6ac.png",
    username: "Kristen Thomas",
  },
  {
    id: 9,
    profilePicture: "no-profile-picture.png",
    username: "Gary Duty",
  },
  {
    id: 10,
    profilePicture:
      "https://marketplace.canva.com/EAEeO4U2XBM/1/0/1600w/canva-pink-and-yellow-cat-modern-hand-drawn-abstract-twitch-profile-picture--lGNrdmHvS4.jpg",
    username: "Safak Kocaoglu",
  },
];

export default function HomePage() {
  const classes = useStyles();
  const [chatPopup, setChatPopup] = useState(null);
  const [chatContent, setChatContent] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userId = userInfo._id;

  const Input = styled("input")({
    display: "none",
  });

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
          <Grid>
            <div className={classes.chat}>
              <div className={classes.chatWrapper}>
                <Typography
                  variant="h6"
                  align="left"
                  className={classes.chatTitle}
                >
                  Chat
                </Typography>
                <hr style={{ width: "90%" }} />
                <ul className={classes.friendList}>
                  {Users.map((user, index) => (
                    <li
                      className={classes.friend}
                      onClick={() => setChatPopup(index)}
                    >
                      <img
                        className={classes.friendImg}
                        src={user.profilePicture}
                        alt=""
                      />
                      <div className={classes.chatPreview}>
                        <span className={classes.friendUsername}>
                          {user.username}
                        </span>
                        <span className={classes.chatContent}>
                          chat content...
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      {chatPopup !== null && Users.filter((user) => user.id === chatPopup) && (
        <div className={classes.chatContainer}>
          <Paper className={classes.paper}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className={classes.chatUsername}>Adam</span>
              <Button
                variant="outlined"
                className={classes.closeButton}
                onClick={() => setChatPopup(null)}
              >
                <Close />
              </Button>
            </div>

            <Paper className={classes.messagesBody}>
              <MessageLeft
                message="hello there"
                timestamp="03/10 00:00"
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                displayName="adam"
              />
              <MessageLeft
                message="how are you?"
                timestamp="03/10 00:01"
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                displayName="adam"
              />
              <MessageRight
                message="hi"
                timestamp="03/10 00:06"
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                displayName="eva"
              />
              <MessageRight
                message="i'm good. thank you!"
                timestamp="03/10 00:07"
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                displayName="eva"
              />
            </Paper>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <TextField
                variant="outlined"
                size="small"
                multiline
                value={chatContent}
                onChange={(e) => setChatContent(e.target.value)}
                InputProps={{
                  classes: {
                    root: classes.input,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.sendButton}
              >
                <Send />
              </Button>
            </div>
          </Paper>
        </div>
      )}
    </div>
  );
};