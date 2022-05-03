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
        <Grid item sm={12} md={6} className={classes.background}>
          <img
            src="https://res.cloudinary.com/petstagram/image/upload/v1651562112/Pets_Public/Petstagram_jfbdgk_ohxwtk.png"
            alt="signin"
            style={{ marginTop: "60px" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
