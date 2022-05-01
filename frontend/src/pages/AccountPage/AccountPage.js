import React from "react";
import useStyles from "./Style";
import { Grid, Typography } from "@mui/material";
import UserDetail from "../../components/UserDetail/UserDetail";

export default function AccountPage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Typography variant="h4" align="left" className={classes.title}>
        Account
      </Typography>
      <Grid container direction="row" justifyContent="center">
        <Grid item className={classes.layout}>
          <UserDetail />
        </Grid>
        {/* <Grid item className={classes.layout}>
          <AvatarForm />
        </Grid> */}
      </Grid>
    </div>
  );
}
