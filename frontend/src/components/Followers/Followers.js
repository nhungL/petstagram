import React from "react";
import useStyles from "./Style";
import { Typography } from "@mui/material";
import Friend from "../Friend/Friend";

export default function Followers(props) {
  const classes = useStyles();

  return (
    <div className={classes.chat}>
      <div className={classes.chatWrapper}>
        <Typography variant="h6" align="left" className={classes.title}>
          Followers
        </Typography>
        <hr style={{ width: "90%" }} />

        <ul className={classes.friendList}>
          {props.followers.map((u) => (
            <Friend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
