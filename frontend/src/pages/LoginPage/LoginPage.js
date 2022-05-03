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
