import React from "react";
import useStyles from "./Style";
import { Typography } from "@mui/material";
import Friend from "../Friend/Friend";

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

export default function Chat() {
  const classes = useStyles();
  return (
    <div className={classes.chat}>
      <div className={classes.chatWrapper}>
        <Typography variant="h6" align="left" className={classes.title}>
          Chat
        </Typography>
        <hr style={{ width: "90%" }} />
        <ul className={classes.friendList}>
          {Users.map((u) => (
            <Friend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
