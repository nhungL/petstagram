import React, { useState } from "react";
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

export default function Post() {
  const classes = useStyles();
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState();
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [promptText, setPromptText] = useState("How's your day?");

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

  const deleteImage = () => {
    setIsImageSelected(false);
    setPostImage("");
    setPromptText("How's your day?")
  };

  const submitPost = () => {
    //TO-DO: post request
    
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
            <Avatar
              src="/static/images/avatar/2.jpg"
              className={classes.avatar}
            >
              NL
            </Avatar>
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
                onClick={submitPost}
              >
                Post
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
