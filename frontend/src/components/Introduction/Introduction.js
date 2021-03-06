import React, { useState, useEffect, useRef } from "react";
import useStyles from "./Style";
import { Typography, TextField, Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Introduction({ userId }) {
  const classes = useStyles();

  //Get current user info
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [user, setUser] = useState({});
  const [showBioInput, setShowBioInput] = useState(false);
  const [introContent, setIntroContent] = useState("");
  const [isHost, setIsHost] = useState(false);
  const year = new Date(user.createdAt).getFullYear();

  const intro = useRef();
  useEffect(() => {
    const fetchUser = async () => {
      setIsHost(false);
      if (userInfo._id === userId) {
        setIsHost(true);
      }
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data);
    };
    fetchUser();

    setIntroContent(user.introduction);
  }, [userId, userInfo, user.introduction]);

  const submitIntro = async (e) => {
    e.preventDefault();
    const updatedIntro = {
      _id: userId,
      introduction: intro.current.value,
    };
    try {
      await axios.put(`/api/users/${userId}`, updatedIntro);
    } catch (err) {
      console.log(err);
    }
    setIntroContent(intro.current.value);
    window.location.reload();
  };

  return (
    <div className={classes.intro}>
      <div className={classes.pad}>
        <Typography variant="h6" align="left" className={classes.title}>
          Intro
        </Typography>
        <hr style={{ width: "90%" }} />
        <div className={classes.pad}>
          <Typography className={classes.subtitle} align="left">
            {introContent}
          </Typography>
          {isHost && (
            <div className={classes.changeIntro}>
              {showBioInput && (
                <form onSubmit={submitIntro} encType="multipart/form-data">
                  <div className={classes.inputBox}>
                    <TextField
                      className={classes.inputBox}
                      placeholder={
                        "Tell others more about you. (hobbies, location, etc.)"
                      }
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
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.saveButton}
                    disabled={!introContent}
                    type="submit"
                  >
                    Save
                  </Button>
                </form>
              )}
              <Button
                variant="contained"
                size="small"
                className={classes.button}
                onClick={() => setShowBioInput((prev) => !prev)}
              >
                Edit bio
              </Button>
            </div>
          )}
        </div>
        <div>
          <Typography sx={{ marginLeft: "20px" }}>
            <Typography className={classes.introdata}>
              <CircleIcon
                className={classes.circleicon}
                sx={{ color: "#A890DB" }}
              />
              <span>Join Since</span>
              <Typography className={classes.introdata}>{year}</Typography>
            </Typography>
            <Typography className={classes.introdata}>
              <CircleIcon
                className={classes.circleicon}
                sx={{ color: "#A890DB" }}
              />
              <span>My Email</span>
              <Typography className={classes.introdata}>
                {user.email}
              </Typography>
            </Typography>
            <Typography className={classes.introdata}>
              <CircleIcon
                className={classes.circleicon}
                sx={{ color: "#A890DB" }}
              />
              <span>My Age</span>
              <Typography className={classes.introdata}>{user.age}</Typography>
            </Typography>

            <Typography className={classes.introdata}>
              <CircleIcon
                className={classes.circleicon}
                sx={{ color: "#A890DB" }}
              />
              <span>My Owner</span>
              <Typography className={classes.introdata}>
                {user.firstname} {user.lastname}
              </Typography>
            </Typography>
            <Typography className={classes.introdata}>
              <CircleIcon
                className={classes.circleicon}
                sx={{ color: "#A890DB" }}
              />
              <span>Posts</span>
              <Typography className={classes.introdata}>
                {user.numPosts}
              </Typography>
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}
