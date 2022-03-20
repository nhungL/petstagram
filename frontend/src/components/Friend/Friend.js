import React from "react";
import useStyles from "./Style";

export default function Friend({ user }) {
  const classes = useStyles();
  return (
    <li className={classes.friend}>
      <img className={classes.friendImg} src={user.profilePicture} alt="" />
      <div className={classes.chatPreview}>
        <span className={classes.friendUsername}>{user.username}</span>
        <span className={classes.chatContent}>chat content...</span>
      </div>
    </li>
  );
}
