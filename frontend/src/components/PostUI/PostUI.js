import React, { useRef } from "react";
import useStyles from "./Style";
import { format } from "timeago.js";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Avatar, Button, Typography, TextField } from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PostUI({ post }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    //get current user
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [isHost, setIsHost] = useState(false);

    const [user, setUser] = useState({});
    const userId = useParams().id;

    //fetch user posts
    useEffect(() => {
        const fetchUser = async () => {
            if (userInfo._id === userId) {
                setIsHost(true);
            }
            const res = await axios.get(`/api/users/${post.author}`);
            setUser(res.data);
        };
        fetchUser();
    }, [post.author]);

    //Handle like/dislike feature
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    // useEffect(() => {
    //     setIsLiked(post.like.includes(userInfo._id));
    // }, [userInfo._id, post.likes]);
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    //Right Menu 
    const [menuOpen, setMenuOpen] = useState(null);
    const open = Boolean(menuOpen);
    const handleClick = (event) => {
        setMenuOpen(event.currentTarget);
    };
    const handleClose = () => {
        setMenuOpen(null);
    };

    //Dialog
    const [dialogOpen, setDialogOpen] = useState(false)
    const handleCloseDialog = () => {
        setMenuOpen(null);
        setDialogOpen(false);
    };

    //Edit Post
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [postContent, setPostContent] = useState(post.description);
    const desc = useRef();
    const handleEditCLick = () => {
        setDialogOpen(true);
        setIsEditClicked(true);
    };
    const handleEditPost = async(e) => {
        e.preventDefault();
        console.log('Edit Post');
        const updatedPost = {
            author: userInfo._id,
            description: desc.current.value,
        };
        try {
            await axios.put("/api/posts/" + post._id, updatedPost);
        } catch(err) {console.error(err);}
        setPostContent(desc.current.value);
        setIsEditClicked(false);
        setMenuOpen(null);
        window.location.reload();
    };

    //Delete Post
    const [isDeleteClicked, setIsDeleteClicked] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const handleDeleteCLick = () => {
        setDialogOpen(true);
        setIsDeleteClicked(true);
    };
    const handleDeletePost = async (e) => {
        e.preventDefault();
        await axios.delete("/api/posts/" + post._id);
        setIsDeleteClicked(false);
        setIsDeleted(true);
        setOpenAlert(true);
        setMenuOpen(null);
        window.location.reload();
    };

    const classes = useStyles();
    return (
        <div className={classes.post}>
            <div className={classes.postWrapper}>
                < div className={classes.postTop} >
                    <div className={classes.postTopLeft}>
                        <Link to={`/profile/${post.author}`} style={{ textDecoration: "None" }}>
                            <Avatar className={classes.postProfileImg}>
                                {user.avatar}
                            </Avatar>
                        </Link>
                        <div className={classes.postTopLeftText}>
                            <Link to={`/profile/${post.author}`} style={{ textDecoration: "None" }}>
                                <span className={classes.postUsername}>
                                    {user.firstname} {user.lastname}
                                </span>
                            </Link>
                            <span className={classes.postDate}>{format(post.createdAt)}</span>
                        </div>
                    </div>

                    {isHost &&
                        <div className={classes.postTopRight}>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVert />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                className={classes.sideMenu}
                                anchorEl={menuOpen}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                            >
                                <MenuItem className={classes.menuItem} onClick={handleEditCLick}>
                                    <Typography>

                                        <Button className={classes.button} >Edit</Button>
                                        <EditIcon className={classes.icon} />
                                    </Typography>
                                    {isEditClicked && dialogOpen &&
                                        <Dialog
                                            open={open}
                                            aria-labelledby="responsive-dialog-title"
                                        >
                                            <DialogTitle id="responsive-dialog-title">
                                                {"Edit Post"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <div className={classes.postCenter}>
                                                    <TextField
                                                        className={classes.inputBox}
                                                        variant="outlined"
                                                        fullWidth
                                                        multiline
                                                        rows={3}
                                                        value={postContent}
                                                        onChange={(e) => setPostContent(e.target.value)}
                                                        inputRef={desc}
                                                        InputProps={{
                                                            classes: {
                                                                root: classes.input,
                                                                focused: classes.focused,
                                                                notchedOutline: classes.notchedOutline,
                                                            },
                                                        }}
                                                    />
                                                    <img
                                                        className={classes.postImg}
                                                        src={post.image}
                                                        alt=""
                                                    />
                                                </div>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button className={classes.dialogButton} autoFocus onClick={handleEditPost}>
                                                    Save
                                                </Button>
                                                <Button className={classes.dialogButton} autoFocus onClick={handleCloseDialog}>
                                                    Cancel
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    }
                                </MenuItem>
                                <MenuItem className={classes.menuItem} onClick={handleDeleteCLick}>
                                    <Typography>

                                        <Button className={classes.button} >Delete</Button>
                                        <DeleteIcon className={classes.icon} />
                                    </Typography>
                                    {isDeleteClicked && dialogOpen &&
                                        <Dialog
                                            open={open}
                                            aria-labelledby="responsive-dialog-title"
                                        >
                                            <DialogTitle id="responsive-dialog-title">
                                                {"Delete Post"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Are you sure you want to delete this post?
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button autoFocus onClick={handleDeletePost}>
                                                    Yes
                                                </Button>
                                                <Button autoFocus onClick={handleCloseDialog}>
                                                    No
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    }
                                </MenuItem>
                            </Menu>
                        </div>
                    }
                </div >
        <div className={classes.postCenter}>
          <span className={classes.postText} align="left">
            {post.description}
          </span>
          <img className={classes.postImg} src={post.image} alt="" />
        </div>

        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <Button
              className={classes.likeIcon}
              startIcon={<Favorite />}
              onClick={likeHandler}
              style={{ color: isLiked ? "#E33A15" : "#C4C4C4" }}
            />
            <span className={classes.postLikeCounter}>{like}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
