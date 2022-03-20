import React from "react";
import useStyles from "./Style";
import { Button, TextField, Grid, Avatar, Divider } from "@mui/material";
import ImgVideoUpload from "../ImgVideoUpload/ImgVideoUpload";

export default function Post() {
  const classes = useStyles();
  return (
    <div className={classes.pad}>
      <Grid container spacing={0} justifyContent="left">
        <Avatar src="/static/images/avatar/2.jpg" className={classes.avatar}>
          NL
        </Avatar>
        <TextField
          placeholder="How's your day?"
          variant="outlined"
          size="small"
          className={classes.inputBox}
          InputProps={{
            classes: {
              root: classes.input,
              focused: classes.focused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
      </Grid>
      <Divider style={{ margin: "20px" }} />
      <Grid container direction="row" spacing={0}>
        <Grid item xs>
          <ImgVideoUpload />
        </Grid>
        <Grid>
          <Button variant="contained" size="small" className={classes.button}>
            Post
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
