import React from "react";
import useStyles from "./Style";
import { Grid } from "@mui/material";
import SignUp from "../../components/SignUp/SignUp";

export default function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.pad}>
      <Grid container spacing={0} direction="row">
        <Grid item sm={12} md={6}>
          <SignUp />
        </Grid>
        <Grid item className={classes.background} sm={12} md={6}>
          <div></div>
        </Grid>
      </Grid>
    </div>
  );
}
