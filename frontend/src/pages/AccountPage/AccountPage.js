import React from "react";
import useStyles from "./Style";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
export default function AccountPage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Typography variant="h4" align="left" className={classes.title}>
        Account
      </Typography>
    </div>
  );
}
