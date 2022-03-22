import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import useStyles from "./Style";

export default function InputForm() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Grid container direction="row">
        <Grid item>
          <Typography variant="h6" align="left" className={classes.title}>
            General Information
          </Typography>
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="row">
                <Typography className={`${classes.FN} ${classes.inputText}`}>
                  First Name
                </Typography>
                <TextField
                  size="small"
                  className={classes.inputBox}
                ></TextField>
              </Grid>
              <Grid container direction="row">
                <Typography className={`${classes.FN} ${classes.inputText}`}>
                  Last Name
                </Typography>
                <TextField
                  size="small"
                  className={classes.inputBox}
                ></TextField>
              </Grid>
              <Grid container direction="row">
                <Typography className={`${classes.email} ${classes.inputText}`}>
                  Email
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
                  <Typography className={`${classes.age} ${classes.inputText}`}>
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
        <Button variant="contained" className={classes.subbutton}>
          CANCEL
        </Button>
      </Grid>
    </div>
  );
}
