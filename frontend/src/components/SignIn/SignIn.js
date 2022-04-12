import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./Style";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/signin";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [userInfo]);

  return (
    <div>
      <form onSubmit={submitHandler}>
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
            {error && (
              <Alert
                // variant="filled"
                severity="error"
                className={classes.alert}
              >
                {error}
              </Alert>
            )}
            <Grid item>
              <Typography align="left" className={classes.body}>
                Email
              </Typography>
            </Grid>
            <Grid item align="left">
              <TextField
                size="small"
                className={classes.inputBox}
                type="email"
                id="email"
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
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item align="left">
              <Button
                variant="contained"
                size="large"
                className={classes.buttonS}
                type="submit"
              >
                Sign In
              </Button>
            </Grid>
            <Grid item align="left">
              <Typography className={classes.newUser}>
                New User?{" "}
                <Link to="/" className={classes.link}>
                  Create an account
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
}
