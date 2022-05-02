import { Grid, IconButton, TextField } from "@mui/material";
import React from "react";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import useStyles from "./Style";
import SearchIcon from "@mui/icons-material/Search";

export default function FindFriends() {
  const classes = useStyles();
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
            type="text"
            placeholder="Find Your Friends ..."
            className={classes.search}
          ></TextField>
        </Grid>
        <Grid item>
          <IconButton className={classes.button}>
            <SearchIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
