import React from "react";
import useStyles from "./Style";
import { Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function Introduction() {
    const classes = useStyles();
    return (
        <div className={classes.intro}>
            <div className={classes.pad} >
                <Typography variant="h6" align="left" className={classes.title}>
                    Intro
                </Typography>
                <hr style={{ width: "90%" }} />
                <Typography className={classes.subtitle} align="left">
                    Tell others more about you. (nickname, hobbies, age, location,
                    etc.)
                </Typography>
                <Typography className={classes.subtitle} align="left">
                    Join since ...
                </Typography>

                <Typography sx={{ marginLeft: "20px" }}>
                    <Typography className={classes.introdata}>
                        <CircleIcon className={classes.circleicon} sx={{ color: "red" }} />
                        <span>Posts</span>
                        <Typography className={classes.introdata}>
                            ###
                        </Typography>
                    </Typography>

                    <Typography className={classes.introdata}>
                        <CircleIcon className={classes.circleicon} sx={{ color: "pink" }} />
                        <span>Following</span>
                        <Typography className={classes.introdata}>
                            ###
                        </Typography>
                    </Typography>

                    <Typography className={classes.introdata}>
                        <CircleIcon className={classes.circleicon} sx={{ color: "green" }} />
                        <span>Followers</span>
                        <Typography className={classes.introdata}>
                            ###
                        </Typography>
                    </Typography>

                    <Typography className={classes.introdata}>
                        <CircleIcon className={classes.circleicon} sx={{ color: "yellow" }} />
                        <span>Likes</span>
                        <Typography className={classes.introdata}>
                            ###
                        </Typography>
                    </Typography>

                </Typography>
            </div>
        </div>
    );
}