import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import useStyles from "./Style";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { register } from "../../actions/register";

export default function SignUp() {
  const classes = useStyles();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);

  // const userRegister = useSelector((state) => state.userRegister);
  // const { userInfo } = userRegister;

  // const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(true);
    } else {
      // dispatch(register(email, password));
      setState({ email: email, password: password });
      // alert(email);
      // alert(password);
      navigate("/account", { state: { email: email, password: password } });
    }
  };

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
                Sign Up
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.subtitle} align="left">
                Create account to start using Petstagram
              </Typography>
            </Grid>
            {error && (
              <Alert
                // variant="filled"
                severity="error"
                className={classes.alert}
              >
                Password and confirm password are not matched.
              </Alert>
            )}
            <Grid item>
              <Typography align="left" className={classes.body}>
                Email
              </Typography>
            </Grid>
            <Grid item align="left">
              <TextField
                type="email"
                id="email"
                name="email"
                required
                size="small"
                className={classes.inputBox}
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
                name="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Typography align="left" className={classes.body}>
                Confirm Password
              </Typography>
            </Grid>
            <Grid item align="left">
              <TextField
                size="small"
                className={classes.inputBox}
                type="password"
                id="confirmPassword"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid item align="left">
              <Button
                variant="contained"
                size="large"
                className={classes.buttonS}
                type="submit"
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item align="left">
              <Typography className={classes.haveacc}>
                Already have an account?{" "}
                <Link to="/signin" className={classes.link}>
                  Sign In
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
}
