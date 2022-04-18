import React from "react";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./Style";

export const MessageLeft = (props) => {
  const message = props.message ? props.message : "message unavailable";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "no-profile-picture.png";
  const displayName = props.displayName ? props.displayName : "unknown user";
  const classes = useStyles();
  return (
    <div className={classes.messageRow}>
      <Avatar
        alt={displayName}
        className={classes.pink}
        src={photoURL}
      ></Avatar>
      <div>
        <div className={classes.messagePink}>
          <div>
            <p className={classes.messageContent}>{message}</p>
          </div>
          <div className={classes.messageTimeStampRight}>{timestamp}</div>
        </div>
      </div>
    </div>
  );
};

export const MessageRight = (props) => {
  const classes = useStyles();
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <div className={classes.messageRowRight}>
      <div className={classes.messagePurple}>
        <p className={classes.messageContent}>{message}</p>
        <div className={classes.messageTimeStampRight}>{timestamp}</div>
      </div>
    </div>
  );
};
