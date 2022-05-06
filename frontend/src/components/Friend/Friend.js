import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./Style";

export default function Friend({ user }) {
  const classes = useStyles();
  const [chatPopup, setChatPopup] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  useEffect(() => {
    const findUser = async () => {
      const userFound = await (await axios.get("/api/users/" + user)).data;
      setAvatar(userFound.avatar);
      setFirstname(userFound.firstname);
      setLastname(userFound.lastname);
    };
    findUser();
  });
  return (
    <>
      <Link to={`/profile/${user}`} style={{ textDecoration: "None" }}>
        <li className={classes.friend} onClick={() => setChatPopup(!chatPopup)}>
          <img className={classes.friendImg} src={avatar} alt="" />
          <div className={classes.chatPreview}>
            <span className={classes.friendUsername}>
              {firstname} {lastname}
            </span>
          </div>
        </li>
      </Link>
    </>
  );
}
