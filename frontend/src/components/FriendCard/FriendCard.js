import { Avatar, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./Style";

export default function FriendCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container justifyContent="center">
        <Card variant="outlined" className={classes.card}>
          <Grid container direction="row">
            <Grid item>
              <Avatar
                sx={{ width: 60, height: 60 }}
                className={classes.avatar}
              ></Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.name}>
                Name
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.button}>
                FOLLOW
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}
