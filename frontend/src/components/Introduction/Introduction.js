import React, { useState, useEffect, useRef } from "react";
import useStyles from "./Style";
import { Typography, TextField, Button, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Introduction({ userId }) {
    const classes = useStyles();

    //Get current user info
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const [user, setUser] = useState({});
    const [buttonText, setButtonText] = useState('Add more');
    const [showBioInput, setShowBioInput] = useState(false);
    const [introContent, setIntroContent] = useState("");
    const [isIntroInputted, setIsIntroInputted] = useState(false);
    const [isHost, setIsHost] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            if (userInfo._id === userId) {
                setIsHost(true);
            }
            const res = await axios.get(`/api/users/${userId}`);
            setUser(res.data);
        };
        fetchUser();
    }, [userId]);

    const year = new Date(user.createdAt).getFullYear();
    const intro = useRef();

    const submitIntro = async (e) => {
        e.preventDefault();
        user.introduction = intro.current.value;
        setIsIntroInputted(true);
        try {
            console.log(user.introduction);
            //update user info
        } catch (err) { console.log(err); }
        setIntroContent("");
    };

    function getData (user, para) {
        user = userInfo._id
    };

    return (
        <div className={classes.intro}>
            <div className={classes.pad} >
                <Typography variant="h6" align="left" className={classes.title}>
                    Intro
                </Typography>
                <hr style={{ width: "90%" }} />
                <div className={classes.pad}>
                    <Typography className={classes.subtitle} align="left">
                        Join since {year}
                    </Typography>
                    <Typography className={classes.subtitle} align="left">
                        Pet name: {user.petname}
                    </Typography>
                    <Typography className={classes.subtitle} align="left">
                        Age: {user.age}
                    </Typography>
                    {isIntroInputted &&
                        <Typography className={classes.subtitle} align="left">
                            Intro: {user.introduction}
                        </Typography>
                    }
                    {isHost &&
                        <div className={classes.changeIntro}>
                            <Button
                                variant="contained"
                                size="small"
                                className={classes.button}
                                onClick={() => setShowBioInput(prev => !prev)}
                            >
                                {buttonText}
                            </Button>
                            {showBioInput &&
                                <form onSubmit={submitIntro} encType="multipart/form-data">
                                    <Grid item xs>
                                        <div className={classes.inputBox}>
                                            <TextField
                                                className={classes.inputBox}
                                                placeholder={"Tell others more about you. (hobbies, location, etc.)"}
                                                variant="outlined"
                                                size="small"
                                                multiline
                                                rows={5}
                                                value={introContent}
                                                onChange={(e) => setIntroContent(e.target.value)}
                                                name="intro"
                                                id="intro"
                                                inputRef={intro}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputIntro,
                                                        focused: classes.focused,
                                                        notchedOutline: classes.notchedOutline,
                                                    },
                                                }}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            className={classes.saveButton}
                                            disabled={!introContent}
                                            type="submit"
                                        >
                                            Save
                                        </Button>
                                    </Grid>
                                </form>
                            }
                        </div>
                    }
                </div>
                <div>
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
                            <span>Friends</span>
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
        </div>
    );
}