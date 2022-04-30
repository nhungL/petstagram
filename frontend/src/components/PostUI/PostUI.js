import React from "react";
import useStyles from "./Style";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";
import axios from "axios";
import { format } from "timeago.js";

export default function PostUI({ post }) {
  // console.log(post.image);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(post.like);

  //get current user
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const [isLiked, setIsLiked] = useState(false);
  // useEffect(() => {
  //     setIsLiked(post.like.includes(userInfo._id));
  // }, [userInfo._id, post.likes]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users/${post.author}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.author]);

  const classes = useStyles();
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <Link
              to={`/profile/${post.author}`}
              style={{ textDecoration: "None" }}
            >
              <Avatar className={classes.postProfileImg}>{user.avatar}</Avatar>
            </Link>
            <div className={classes.postTopLeftText}>
              <span className={classes.postUsername}>{user.petname}</span>
              <span className={classes.postDate}>{format(post.createdAt)}</span>
            </div>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>

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
