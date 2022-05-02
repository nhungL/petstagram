import { Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import useStyles from "./Style";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import FriendCard from "../../components/FriendCard/FriendCard";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export default function FindFriends() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState(false);
  const [gotUser, setGotUser] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [id, setId] = useState("");
  const [lastname, setLastName] = useState("");
  const [avatar, setAvatar] = useState("");

  const searchHandler = async () => {
    console.log(email);
    if (email === "") {
      setSearch(true);
      console.log(search);
    } else {
      console.log("find friend");
      const users = await (
        await axios.get("/api/users/searchUser/" + email)
      ).data;
      console.log(users);
      setSearch(true);
      console.log(users[0]);
      console.log(search);
      setGotUser(true);
      const user = users[0];
      console.log(user._id);
      setFirstName(user.firstname);
      setLastName(user.lastname);
      setId(user._id);
      setAvatar(user.avatar);
    }
  };

  const renderFriendList = (firstname, lastname, id, avatar) => {
    console.log("print card");
    return (
      <FriendCard
        firstname={firstname}
        lastname={lastname}
        id={id}
        avatar={avatar}
      ></FriendCard>
    );
  };

  return (
    <div>
      <AppBarContent />
      <Grid container direction="row" justifyContent="center">
        <Grid item>
          <img
            src="https://res.cloudinary.com/petstagram/image/upload/v1651461712/Pets_Post/pet_wmcjfw.png"
            alt="pet"
            className={classes.pic}
          />
        </Grid>
        <Grid item>
          <TextField
            type="email"
            placeholder="Find Your Friends ..."
            className={classes.search}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <Typography variant="body2" className={classes.text}>
            Use email to find your friends!
          </Typography>
        </Grid>
        <Grid item>
          <IconButton className={classes.button} onClick={searchHandler}>
            <SearchIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
      </Grid>
      <div>
        {search ? (
          gotUser ? (
            renderFriendList(firstname, lastname, id, avatar)
          ) : (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h5" className={classes.nofriend}>
                  No Result Found.{" "}
                </Typography>
              </Grid>
              <Grid item>
                <SentimentVeryDissatisfiedIcon
                  className={classes.icon}
                  sx={{ fontSize: 40 }}
                />
              </Grid>
            </Grid>
          )
        ) : (
          "hello"
        )}
      </div>
    </div>
  );
}
