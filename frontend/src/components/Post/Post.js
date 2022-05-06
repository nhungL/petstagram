import React, { useState, useEffect, useRef } from "react";
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
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Post() {
  const classes = useStyles();

  //Get current user info
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users/${userInfo._id}`);
      setUser(res.data);
    };
    fetchUser();
  }, [userInfo._id]);

  //Post info
  const desc = useRef();
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState();
  const [file, setFile] = useState(null);

  const [isImageSelected, setIsImageSelected] = useState(false);
  const [promptText, setPromptText] = useState(
    "Hi, " + userInfo.firstname + "! How's your day?"
  );

  //Image/Video Upload Related
  //Upload Image
  const uploadImage = async (event) => {
    setIsImageSelected(true);
    setPromptText("Say something about this photo...");
    const file = event.target.files[0];
    setFile(file);
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
    setFile(null);
    setPostImage("");
    setPromptText("Hi, " + userInfo.firstname + "! How's your day?");
  };

  //Submit post to DB
  const submitPost = async (e) => {
    e.preventDefault();
    const newPost = {
      author: userInfo._id,
      description: desc.current.value,
    };
    const data = new FormData();
    if (file) {
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("imageUpload", file);
      try {
        const res = await (await axios.post("/api/upload", data)).data;
        newPost.image = res.path;
        newPost.imageId = res.imageid;
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/api/posts", newPost);
      const count = user.numPosts + 1;
      const countPost = {
        numPosts: count,
      };
      await axios.put(`/api/users/${userInfo._id}`, countPost);
      window.location.reload();
    } catch (err) {}
    setPostContent("");
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <div className={classes.post}>
      <div className={classes.pad}>
        <form
          className={classes.bottom}
          onSubmit={submitPost}
          encType="multipart/form-data"
        >
          <Grid container direction="column">
            <div className={classes.top}>
              <Avatar src={userInfo.avatar} className={classes.avatar}></Avatar>
              <div className={classes.inputBox}>
                <TextField
                  className={classes.inputBox}
                  placeholder={promptText}
                  variant="outlined"
                  size="small"
                  multiline
                  rows={3}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  name="description"
                  id="description"
                  inputRef={desc}
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
                        height: "100%",
                        width: "100%",
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
                      name="imageUpload"
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
          </Grid>
        </form>
      </div>
    </div>
  );
}
