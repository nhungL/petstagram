import { React, useState } from "react";
import useStyles from "./Style";
import { Button } from "@mui/material";

// const text = "Unfriend" 
// const [buttonText, setButtonText] = useState(text);

export default function Friend({ user }) {
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
                {`${buttonText ? 'Send friend request' : 'Unfriend'}`}
            </Button>
        </li>
    );
}