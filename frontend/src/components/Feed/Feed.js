import React from "react";
import useStyles from "./Style";
import { useState, useEffect } from "react";
import axios from "axios";
import PostUI from "../PostUI/PostUI";

export default function Feed({ userId }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("api/posts/profile/" + userId);
      console.log(res.data);
      setPosts(res.data);
      // setPosts(res.data.sort((p1, p2) => {
      //   return new Date(p2.createdAt) - new Date(p1.createdAt);
      // }));
    };
    fetchPosts();
  }, [userId]);

  const classes = useStyles();
  return (
    <>
      <div className={classes.feed}>
        <div className={classes.post}>
          {posts.map((p) => (
            <PostUI key={p.id} post={p} />
            // <div className={classes.postWrapper}>
            //   <div className={classes.postTop}>
            //     <div className={classes.postTopLeft}>
            //       <Avatar className={classes.postProfileImg}>
            //         {user.avatar}
            //       </Avatar>
            //       <div className={classes.postTopLeftText}>
            //         <span className={classes.postUsername}>
            //           {user.firstname}
            //         </span>
            //         <span className={classes.postDate}>a long time</span>
            //       </div>
            //     </div>
            //     <div className={classes.postTopRight}>
            //       <MoreVert />
            //     </div>
            //   </div>

            //   <div className={classes.postCenter}>
            //     <span className={classes.postText}>
            //       Look at my cat Luna. Isn't she so cute!
            //       {p.desc}
            //     </span>
            //     <img
            //       className={classes.postImg}
            //       src={p.image}
            //       src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
            //       alt=""
            //     />
            //   </div>

            //   <div className={classes.postBottom}>
            //     <div className={classes.postBottomLeft}>
            //       <Button
            //         className={classes.likeIcon}
            //         startIcon={<Favorite />}
            //         onClick={likeHandler}
            //         style={{ color: isLiked ? "#E33A15" : "#C4C4C4" }}
            //       />
            //       <span className={classes.postLikeCounter}>{like}</span>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
}