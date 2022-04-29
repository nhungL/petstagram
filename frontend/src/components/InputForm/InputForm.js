import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../../actions/register";
import useStyles from "./Style";

export default function InputForm() {
  const classes = useStyles();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState(0);
  const [petName, setpetName] = useState("");
  const [species, setSpecies] = useState("");

  const { state } = useLocation();
  const { email, password } = state;

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      register(firstName, lastName, email, password, petName, age, species)
    );
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      // navigate("/home");
      window.location = "/home";
    }
  }, [userInfo]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={classes.background}>
          {error && (
            <Alert
              // variant="filled"
              severity="error"
              className={classes.alert}
            >
              {error}
            </Alert>
          )}
          <Grid container direction="row">
            <Grid item>
              <Typography variant="h6" align="left" className={classes.title}>
                General Information
              </Typography>
              <Grid container direction="column">
                <Grid item>
                  <Grid container direction="row">
                    <Typography
                      className={`${classes.FN} ${classes.inputText}`}
                    >
                      First Name
                    </Typography>
                    <TextField
                      size="small"
                      className={classes.inputBox}
                      type="text"
                      id="firstname"
                      required
                      onChange={(e) => setfirstName(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid container direction="row">
                    <Typography
                      className={`${classes.FN} ${classes.inputText}`}
                    >
                      Last Name
                    </Typography>
                    <TextField
                      size="small"
                      className={classes.inputBox}
                      type="text"
                      id="lastname"
                      required
                      onChange={(e) => setlastName(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid container direction="row">
                    <Typography
                      className={`${classes.email} ${classes.inputText}`}
                    >
                      Email
                    </Typography>
                    <TextField
                      size="small"
                      className={classes.inputBox}
                      value={email}
                      disabled
                    ></TextField>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className={classes.background1}>
                <Typography variant="h6" align="left" className={classes.title}>
                  Pet
                </Typography>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container direction="row">
                      <Typography
                        className={`${classes.name} ${classes.inputText}`}
                      >
                        Name
                      </Typography>
                      <TextField
                        size="small"
                        className={classes.inputBox}
                        type="text"
                        id="petname"
                        required
                        onChange={(e) => setpetName(e.target.value)}
                      ></TextField>
                    </Grid>
                    <Grid container direction="row">
                      <Typography
                        className={`${classes.age} ${classes.inputText}`}
                      >
                        Age
                      </Typography>
                      <TextField
                        size="small"
                        className={classes.inputBox}
                        type="number"
                        id="age"
                        onChange={(e) => setAge(e.target.value)}
                      ></TextField>
                    </Grid>
                    <Grid container direction="row">
                      <Typography
                        className={`${classes.species} ${classes.inputText}`}
                      >
                        Species
                      </Typography>
                      <TextField
                        size="small"
                        className={classes.inputBox}
                        type="text"
                        id="species"
                        onChange={(e) => setSpecies(e.target.value)}
                      ></TextField>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Button
              variant="contained"
              className={classes.subbutton}
              type="submit"
            >
              SUBMIT
            </Button>
            <Link className={classes.link} to="/">
              <Button variant="contained" className={classes.subbutton}>
                CANCEL
              </Button>
            </Link>
          </Grid>
        </div>
      </form>
    </div>
  );
}
