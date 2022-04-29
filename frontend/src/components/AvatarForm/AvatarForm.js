import { Button, Card, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./Style";

export default function AvatarForm() {
  const classes = useStyles();
  const [changedPicture, setchangedPicture] = useState(false);
  const [img, setImg] = useState("avatar.png");

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const cancelHandler = () => {
    setchangedPicture((prev) => !prev);
    setImg("avatar.png");
  };

  const submitHandler = () => {};

  return (
    <div className={classes.background}>
      <form onSubmit={submitHandler}>
        <Card>
          <Typography variant="h6" align="left" className={classes.title}>
            AVATAR
          </Typography>
          <Divider className={classes.line}></Divider>
          <img src={img} alt="avatar" className={classes.image} />
          {changedPicture ? (
            <div>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <input
                    type="file"
                    id="avatar"
                    accept=".png, .jpg, .jpeg"
                    onChange={onImageChange}
                  ></input>
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      <Button
                        variant="contained"
                        className={classes.buttonR}
                        onClick={cancelHandler}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div>
              <Button
                variant="contained"
                className={classes.subbutton}
                onClick={() => setchangedPicture((prev) => !prev)}
              >
                Change Profile Picture
              </Button>
            </div>
          )}
        </Card>
      </form>
    </div>
  );
}
