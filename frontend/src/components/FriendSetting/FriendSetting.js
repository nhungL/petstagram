import React from "react";
import useStyles from "./Style";
import { FixedSizeList } from 'react-window';
import { Grid, Typography, ListItem} from "@mui/material";
import FriendDetail from "../FriendDetail/FriendDetail";

const Users = [
  {
    id: 1,
    profilePicture: "no-profile-picture.png",
    username: "Safak Kocaoglu",
    status: "Friend",
  },
  {
    id: 2,
    profilePicture: "https://wallpaperaccess.com/full/6295120.jpg",
    username: "Janell Shrum",
    status: "Friend",
  },
  {
    id: 3,
    profilePicture: "no-profile-picture.png",
    username: "Alex Durden",
    status: "Friend",
  },
  {
    id: 4,
    profilePicture: "https://pbs.twimg.com/media/DxRCJxmWsAA2yqi.jpg",
    username: "Dora Hawks",
    status: "Friend",
  },
  {
    id: 5,
    profilePicture: "no-profile-picture.png",
    username: "Thomas Holden",
    status: "Friend",
  },
  {
    id: 6,
    profilePicture: "no-profile-picture.png",
    username: "Shirley Beauchamp",
    status: "Friend",
  },
  {
    id: 7,
    profilePicture: "no-profile-picture.png",
    username: "Travis Bennett",
    status: "Friend",
  },
  {
    id: 8,
    profilePicture:
      "https://dthezntil550i.cloudfront.net/ou/latest/ou2009170412086260016840777/1280_960/c446f863-b1b3-47fb-b2ea-87a6aaa9b6ac.png",
    username: "Kristen Thomas",
    status: "Friend",
  },
  {
    id: 9,
    profilePicture: "no-profile-picture.png",
    username: "Gary Duty",
    status: "Friend",
  },
  {
    id: 10,
    profilePicture:
      "https://marketplace.canva.com/EAEeO4U2XBM/1/0/1600w/canva-pink-and-yellow-cat-modern-hand-drawn-abstract-twitch-profile-picture--lGNrdmHvS4.jpg",
    username: "Safak Kocaoglu",
    status: "Friend",
  },
];

function renderFriend(props) {
  const { index, style } = props;
  return (
    <div>
      <ul>
        {Users.map((u) => (
          <FriendDetail key={u.id} user={u} />
        ))}
      </ul>
    </div>
  );
}

export default function FriendSetting() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Typography variant="h6" align="left" className={classes.title}>
        100 Friends
      </Typography>
      <FixedSizeList
        className={classes.listLayout}
        height={500}
        itemSize={46}
        itemCount={1}
        overscanCount={5}
      >
        {renderFriend}
      </FixedSizeList>
    </div>
  );
}
