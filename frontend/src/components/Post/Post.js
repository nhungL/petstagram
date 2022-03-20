import React from "react";
import useStyles from "./Style";

export default function Post() {
  const classes = useStyles();
  return (
    <div className={classes.pad}>
      <p>Here is Post</p>
    </div>
  );
}