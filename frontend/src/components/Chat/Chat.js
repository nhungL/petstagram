import React from "react";
import useStyles from "./Style";
import { Grid, Typography } from "@mui/material";
import SignUp from "../../components/SignUp/SignUp";

export default function Chat() {
  const classes = useStyles();
  return (
    <div className={classes.pad}>
      <p>Here is Chat</p>
    </div>
  );
}