import React from "react";
import useStyles from "./Style";
import { Grid, Typography } from "@mui/material";
import SignUp from "../../components/SignUp/SignUp";

export default function Post() {
  const classes = useStyles();
  return (
    <div className={classes.pad}>
      <p>Here is Post</p>
    </div>
  );
}