import React from "react";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import useStyles from "./Style";

export default function UnfoundPage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <AppBarContent />
      <img className={classes.notFoundImage} src="not-found-image.png" alt="" />
      <h1 className={classes.pageTitle}>
        Woof! The page you requested could not be found
      </h1>
      <p>
        Please{" "}
        <a href="/home" style={{ color: "#FFB2A6" }}>
          click here
        </a>{" "}
        to navigate back to home page
      </p>
    </div>
  );
}
