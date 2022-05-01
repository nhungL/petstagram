import { React, useState } from "react";
import useStyles from "./Style";
import { Button } from "@mui/material";

export default function FriendDetail({ user }, type) {
    const [buttonText, setButtonText] = useState(false);
    const classes = useStyles();
    
    return (
        <li className={classes.friend}>
            <img className={classes.friendImg} src={user.profilePicture} alt="" />
            <div>
                <span className={classes.friendUsername}>{user.username}</span>
            </div>
            <Button variant="contained" size="small" className={classes.button}
                onClick={() => setButtonText(!buttonText)}>
                {`${buttonText ? 'Follow' : 'Unfollow'}`}
            </Button>
        </li>
    );
}