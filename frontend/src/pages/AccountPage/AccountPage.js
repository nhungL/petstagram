import React from "react";
import useStyles from "./Style";
import { Grid, Typography } from "@mui/material";
import UserDetail from "../../components/UserDetail/UserDetail";
import AvatarForm from "../../components/AvatarForm/AvatarForm";
export default function AccountPage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className={classes.layout}>
          <Typography variant="h4" align="left" className={classes.title}>
            Account
          </Typography>
          <UserDetail />
        </Grid>
        <Grid item className={classes.avar}>
          <AvatarForm />
        </Grid>
      </Grid>
    </div>
  );
}
