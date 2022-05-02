import { Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import useStyles from "./Style";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import FriendCard from "../../components/FriendCard/FriendCard";

export default function FindFriends() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [found, setFound] = useState([]);

  const searchHandler = async () => {
    console.log(email);
    const users = await axios.get("/api/users/searchUser/" + email);
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
      <FriendCard />
    </div>
  );
}
