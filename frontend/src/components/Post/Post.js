import React from "react";
import useStyles from "./Style";
import { Button, TextField, Grid, Avatar } from "@mui/material";
import ImgVideoUpload from "../ImgVideoUpload/ImgVideoUpload";

export default function Post() {
  const classes = useStyles();
  return (
    <div className={classes.post}>
      <div className={classes.pad} >
        <Grid container direction="column">
          <div className={classes.top}>
            <Avatar src="/static/images/avatar/2.jpg" className={classes.avatar}>
              NL
            </Avatar>
            <div className={classes.inputBox}>
              <TextField
                placeholder="How's your day?"
                variant="outlined"
                size="small"
                multiline
                className={classes.inputBox}
                InputProps={{
                  classes: {
                    root: classes.input,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
          </div>
          <hr style={{ width: "90%" }} />
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
        </Grid>
      </div>
    </div>
  );
}
