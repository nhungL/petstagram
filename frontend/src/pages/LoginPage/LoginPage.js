import React from "react";
import useStyles from "./Style";
import { Grid, Typography } from "@mui/material";
import SignUp from "../../components/SignUp/SignUp";

export default function LoginPage() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0} direction="row">
        <Grid item>
          <SignUp />
        </Grid>
      </Grid>
    </div>
  );
}
