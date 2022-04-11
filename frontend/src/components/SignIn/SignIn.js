import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./Style";
import React, { useState } from "react";

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
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
            Sign In
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="left" className={classes.body}>
            Email
          </Typography>
        </Grid>
        <Grid item align="left">
          <TextField
            size="small"
            className={classes.inputBox}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography align="left" className={classes.body}>
            Password
          </Typography>
        </Grid>
        <Grid item align="left">
          <TextField
            size="small"
            className={classes.inputBox}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item align="left">
          <Button
            variant="contained"
            size="large"
            className={classes.buttonS}
            onSubmit={submitHandler}
          >
            Sign In
          </Button>
        </Grid>
        <Grid item align="left">
          <Typography className={classes.newUser}>
            New User?{" "}
            <Link to="/register" className={classes.link}>
              Create an account
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
