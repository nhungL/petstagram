import React, { useState, useRef } from "react";
import useStyles from "./Style";
import {
  Button,
  TextField,
  Grid,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Post() {
  const classes = useStyles();

  //Get current user info
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  //Post info
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState();
  const [state, setState] = useState({
    description: "",
    author: "",
  });
  const [error, setError] = useState(false);

  const [isImageSelected, setIsImageSelected] = useState(false);
  const [promptText, setPromptText] = useState(
    "Hi, " + userInfo.firstname + "! How's your day?"
  );

  //Upload Image
  const uploadImage = (event) => {
    setIsImageSelected(true);
    setPromptText("Say something about this photo...");
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        setPostImage(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  //Delete Image
  const deleteImage = () => {
    setIsImageSelected(false);
    setPostImage("");
    setPromptText("Hi, " + userInfo.firstname + "! How's your day?");
  };

  //Submit post to DB
  const submitPost = async (e) => {
    e.preventDefault();

    // const newPost = {
    //   userId: userInfo._id,
    //   description: desc.current.value,
    // }
    // if (file) {
    //   const data = new FormData();
    //   const fileName = Date.now() + file.name;
    //   data.append("name", fileName);
    //   data.append("file", file);
    //   newPost.img = fileName;
    //   console.log(newPost);
    //   try {
    //     await axios.post("/upload", data);
    //   } catch (err) {}
    // }
  //  try {
  //     setState({ 
        
  //       description: description,
  //      }); 
  //     // navigate("/account", { state: { email: email, password: password } });
  //     window.location.reload();
  //   } catch (err) { }
    setPostContent("");
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <div className={classes.post}>
      <div className={classes.pad}>
        <Grid container direction="column">
          <div className={classes.top}>
            <Avatar src={userInfo.avatar} className={classes.avatar}></Avatar>
            <div className={classes.inputBox}>
              <TextField
                placeholder={promptText}
                variant="outlined"
                size="small"
                multiline
                rows={3}
                className={classes.inputBox}
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                name="description"
                id="description"
                InputProps={{
                  classes: {
                    root: classes.input,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {isImageSelected && (
                <div className={classes.postImg}>
                  <Box
                    component="img"
                    sx={{
                      height: 300,
                    }}
                    src={postImage}
                  />
                  <IconButton
                    aria-label="upload picture"
                    component="span"
                    onClick={deleteImage}
                  >
                    <Close style={{ color: "#C4C4C4" }} />
                  </IconButton>
                </div>
              )}
            </div>
          </div>

          <form className={classes.bottom} onSubmit={submitPost}>
            <Grid container direction="row" spacing={0}>
              <Grid item xs>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <label htmlFor="image-button-file">
                    <Input
                      accept="image/*"
                      id="image-button-file"
                      type="file"
                      onChange={uploadImage}
                    />
                    <IconButton
                      aria-label="upload picture"
                      component="span"
                      className={classes.uploadimagebutton}
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                  <label htmlFor="video-button-file">
                    <Input
                      accept="video/mp4,video/x-m4v,video/*"
                      id="video-button-file"
                      //multiple
                      type="file"
                    />
                    <IconButton
                      aria-label="upload picture"
                      component="span"
                      className={classes.uploadvideobutton}
                      style={{ ml: "20px" }}
                    >
                      <VideoLibraryIcon />
                    </IconButton>
                  </label>
                </Stack>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.button}
                  type="submit"
                >
                  Post
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </div>
    </div >
  );
}
