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
    profilePicture: "no-profile-picture.png",
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: "no-profile-picture.png",
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: "no-profile-picture.png",
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
    profilePicture: "no-profile-picture.png",
    username: "Kristen Thomas",
  },
  {
    id: 9,
    profilePicture: "no-profile-picture.png",
    username: "Gary Duty",
  },
  {
    id: 10,
    profilePicture: "no-profile-picture.png",
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
