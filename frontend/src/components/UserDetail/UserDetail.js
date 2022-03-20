import { Card, Divider, Typography } from "@mui/material";
import React from "react";
import InputForm from "../InputForm/InputForm";
import useStyles from "./Style";

export default function UserDetail() {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <Typography variant="h6" align="left" className={classes.title}>
          USER DETAILS
        </Typography>
        <Divider className={classes.line}></Divider>
        <InputForm />
      </Card>
    </div>
  );
}
