import { Grid } from "@mui/material";
import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import useStyles from "./Style";

export default function SignInPage() {
  const classes = useStyles();
  return (
    <div className={classes.pad}>
      <Grid container spacing={0} direction="row">
        <Grid item sm={12} md={6}>
          <SignIn />
        </Grid>
        <Grid item className={classes.background} sm={12} md={6}>
          <div></div>
        </Grid>
      </Grid>
    </div>
  );
}
