import React from "react";
import useStyles from "./Style";
import { Typography } from "@mui/material";
import UserDetail from "../../components/UserDetail/UserDetail";
export default function AccountPage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Typography variant="h4" align="left" className={classes.title}>
        Account
      </Typography>
      <UserDetail />
    </div>
  );
}
