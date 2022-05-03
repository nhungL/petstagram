import React, { useEffect, useState } from "react";
import useStyles from "./Style";
import { Typography } from "@mui/material";
import Friend from "../Friend/Friend";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Following(props) {
  const classes = useStyles();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [user, setUser] = useState();

  // useEffect(() => {
  //   console.log("Out fetch user");
  //   const fetchUser = async () => {
  //     console.log("In fetch user");
  //     // const res = await axios.get("/api/users/" + userId.userId);
  //     // setUser(res.data);
  //   };
  //   fetchUser();
  //   console.log(user);
  // }, []);

  //console.log(props.following);

  return (
    <div className={classes.chat}>
      <div className={classes.chatWrapper}>
        <Typography variant="h6" align="left" className={classes.title}>
          Following
        </Typography>
        <hr style={{ width: "90%" }} />

        <ul className={classes.friendList}>
          {props.following.map((u) => (
            <Friend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
