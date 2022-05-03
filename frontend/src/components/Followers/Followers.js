import React, { useState } from "react";
import useStyles from "./Style";
import { Link, Typography } from "@mui/material";
import Friend from "../Friend/Friend";
import { useSelector } from "react-redux";

export default function Followers() {
  const classes = useStyles();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div className={classes.chat}>
      <div className={classes.chatWrapper}>
        <Typography variant="h6" align="left" className={classes.title}>
          Followers
        </Typography>
        <hr style={{ width: "90%" }} />

        <ul className={classes.friendList}>
          {userInfo.followers.map((u) => (
            <Friend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
