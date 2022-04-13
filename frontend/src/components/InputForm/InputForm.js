import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Style";

export default function InputForm() {
  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={classes.background}>
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
                      // onChange={(e) => setfirstName(e.target.value)}
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
                      // onChange={(e) => setlastName(e.target.value)}
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
                    ></TextField>
                  </Grid>
                  <Grid container direction="row">
                    <Typography
                      className={`${classes.pw} ${classes.inputText}`}
                    >
                      Password
                    </Typography>
                    <TextField
                      size="small"
                      className={classes.inputBox}
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
                      ></TextField>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Button variant="contained" className={classes.subbutton}>
              SAVE
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
