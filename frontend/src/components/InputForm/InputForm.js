import {
  Alert,
  Button,
  Card,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../../actions/register";
import useStyles from "./Style";

export default function InputForm() {
  const classes = useStyles();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState(0);
  const [petName, setpetName] = useState("");
  const [species, setSpecies] = useState("");

  const { state } = useLocation();
  const { email, password } = state;

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const [changedPicture, setchangedPicture] = useState(false);
  const [img, setImg] = useState("avatar.png");
  const [avatar, setAvatar] = useState("avatar.png");

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    setAvatar(e.target.files[0]);
    alert(avatar);
    alert(img);
  };

  const cancelHandler = () => {
    setchangedPicture((prev) => !prev);
    setImg("avatar.png");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      register(
        firstName,
        lastName,
        email,
        password,
        petName,
        age,
        species,
        avatar
      )
    );
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [userInfo]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={classes.background}>
          {error && (
            <Alert
              // variant="filled"
              severity="error"
              className={classes.alert}
            >
              {error}
            </Alert>
          )}
          <Grid container direction="row" justifyContent="center">
            <Grid item className={classes.layout}>
              <Grid container direction="row">
                <Grid item>
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.title}
                  >
                    General Information
                  </Typography>
                  <Grid container direction="column">
                    <Grid item>
                      <Grid container direction="row">
                        <Typography
                          className={`${classes.FN} ${classes.inputText}`}
                        >
                          First Name
                        </Typography>
                        <TextField
                          size="small"
                          className={classes.inputBox}
                          type="text"
                          id="firstname"
                          required
                          onChange={(e) => setfirstName(e.target.value)}
                        ></TextField>
                      </Grid>
                      <Grid container direction="row">
                        <Typography
                          className={`${classes.FN} ${classes.inputText}`}
                        >
                          Last Name
                        </Typography>
                        <TextField
                          size="small"
                          className={classes.inputBox}
                          type="text"
                          id="lastname"
                          required
                          onChange={(e) => setlastName(e.target.value)}
                        ></TextField>
                      </Grid>
                      <Grid container direction="row">
                        <Typography
                          className={`${classes.email} ${classes.inputText}`}
                        >
                          Email
                        </Typography>
                        <TextField
                          size="small"
                          className={classes.inputBox}
                          value={email}
                          disabled
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <div className={classes.background1}>
                    <Typography
                      variant="h6"
                      align="left"
                      className={classes.title}
                    >
                      Pet
                    </Typography>
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container direction="row">
                          <Typography
                            className={`${classes.name} ${classes.inputText}`}
                          >
                            Name
                          </Typography>
                          <TextField
                            size="small"
                            className={classes.inputBox}
                            type="text"
                            id="petname"
                            required
                            onChange={(e) => setpetName(e.target.value)}
                          ></TextField>
                        </Grid>
                        <Grid container direction="row">
                          <Typography
                            className={`${classes.age} ${classes.inputText}`}
                          >
                            Age
                          </Typography>
                          <TextField
                            size="small"
                            className={classes.inputBox}
                            type="number"
                            id="age"
                            onChange={(e) => setAge(e.target.value)}
                          ></TextField>
                        </Grid>
                        <Grid container direction="row">
                          <Typography
                            className={`${classes.species} ${classes.inputText}`}
                          >
                            Species
                          </Typography>
                          <TextField
                            size="small"
                            className={classes.inputBox}
                            type="text"
                            id="species"
                            onChange={(e) => setSpecies(e.target.value)}
                          ></TextField>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Button
                  variant="contained"
                  className={classes.subbutton}
                  type="submit"
                >
                  SAVE
                </Button>
                <Link className={classes.link} to="/">
                  <Button variant="contained" className={classes.subbutton}>
                    CANCEL
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid item className={classes.layout}>
              <Card
                style={{
                  border: "none",
                  boxShadow: "none",
                  marginLeft: "30px",
                }}
              >
                {/* <Typography
                  variant="h6"
                  align="left"
                  className={classes.title2}
                >
                  AVATAR
                </Typography>
                <Divider className={classes.line}></Divider> */}
                <img src={img} alt="avatar" className={classes.image} />
                {changedPicture ? (
                  <div>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <input
                          type="file"
                          id="avatar"
                          accept=".png, .jpg, .jpeg"
                          onChange={onImageChange}
                        ></input>
                      </Grid>
                      <Grid item>
                        <Grid container direction="row">
                          <Grid item>
                            <Button
                              variant="contained"
                              className={classes.buttonR}
                              onClick={cancelHandler}
                            >
                              Cancel
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                ) : (
                  <div>
                    <Button
                      variant="contained"
                      className={classes.subbutton2}
                      onClick={() => setchangedPicture((prev) => !prev)}
                    >
                      Change Profile Picture
                    </Button>
                  </div>
                )}
              </Card>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
}
