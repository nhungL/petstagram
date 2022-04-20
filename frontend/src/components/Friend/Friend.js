import { Alert, Paper } from "@mui/material";
import React, { useState } from "react";
import { MessageLeft, MessageRight } from "../ChatBubble/ChatBubble";
import useStyles from "./Style";

export default function Friend({ user }) {
  const classes = useStyles();
  const [chatPopup, setChatPopup] = useState(false);

  return (
    <>
      <li className={classes.friend} onClick={() => setChatPopup(!chatPopup)}>
        <img className={classes.friendImg} src={user.profilePicture} alt="" />
        <div className={classes.chatPreview}>
          <span className={classes.friendUsername}>{user.username}</span>
          <span className={classes.chatContent}>chat content...</span>
        </div>
      </li>

      {chatPopup && (
        <Alert>clicked</Alert>
        // <div className={classes.container}>
        //   <Paper className={classes.paper} zDepth={2}>
        //     <Paper id="style-1" className={classes.messagesBody}>
        //       <MessageLeft
        //         message="hello there"
        //         timestamp="03/10 00:00"
        //         photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
        //         displayName=""
        //         avatarDisp={true}
        //       />
        //       <MessageLeft
        //         message="hi"
        //         timestamp="03/10 00:05"
        //         photoURL=""
        //         displayName="テスト"
        //         avatarDisp={false}
        //       />
        //       <MessageRight
        //         message="how are you?"
        //         timestamp="03/10 00:06"
        //         photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
        //         displayName="まさりぶ"
        //         avatarDisp={true}
        //       />
        //       <MessageRight
        //         message="i'm good. thank you!"
        //         timestamp="03/10 00:10"
        //         photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
        //         displayName="まさりぶ"
        //         avatarDisp={false}
        //       />
        //     </Paper>
        //     <ChatInput />
        //   </Paper>
        // </div>
      )}
    </>
  );
}
