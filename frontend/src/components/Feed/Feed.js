import React from "react";
import useStyles from "./Style";
import { useState, useEffect } from "react";
import axios from "axios";
import PostUI from "../PostUI/PostUI";

export default function Feed({ userId }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = userId
        ? await axios.get("/api/posts/profile/" + userId)
        : await axios.get("api/posts");
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [userId]);

  const classes = useStyles();
  return (
    <>
      <div className={classes.feed}>
        {posts.map((p) => (
          <PostUI key={p.id} post={p} />
        ))}
      </div>
    </>
  );
}
