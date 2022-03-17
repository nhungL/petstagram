import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import useStyles from "./Style";
import React from "react";

export default function SignUp() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Grid
        containter
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4" align="left" className={classes.title}>
            Sign Up
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subtitle} align="left">
            Create account to start using Petstagram
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="left" className={classes.body}>
            Email
          </Typography>
        </Grid>
        <Grid item align="left">
          <TextField size="small" className={classes.inputBox} />
        </Grid>
        <Grid item>
          <Typography align="left" className={classes.body}>
            Password
          </Typography>
        </Grid>
        <Grid item align="left">
          <TextField size="small" className={classes.inputBox} />
        </Grid>
        <Grid item>
          <Typography align="left" className={classes.body}>
            Confirm Password
          </Typography>
        </Grid>
        <Grid item align="left">
          <TextField size="small" className={classes.inputBox} />
        </Grid>
        <Grid item align="left">
          <Button variant="contained" size="large" className={classes.buttonS}>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}