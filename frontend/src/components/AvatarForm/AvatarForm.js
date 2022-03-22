import { Button, Card, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "./Style";

export default function AvatarForm() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Card>
        <Typography variant="h6" align="left" className={classes.title}>
          AVATAR
        </Typography>
        <Divider></Divider>
        <Box
          sx={{
            width: 200,
            height: 200,
            backgroundColor: "#FFB2A6",
            margin: 6,
            borderRadius: 2,
          }}
        />
        <Button variant="contained" className={classes.subbutton}>
          Change Profile Picture
        </Button>
      </Card>
    </div>
  );
}
