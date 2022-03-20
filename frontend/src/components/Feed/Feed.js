import React from "react";
import useStyles from "./Style";
import { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";

export default function Feed() {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const classes = useStyles();
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <Avatar className={classes.postProfileImg}></Avatar>
            <div className={classes.postTopLeftText}>
              <span className={classes.postUsername}>averlongusernameeeee</span>
              <span className={classes.postDate}>an hour ago</span>
            </div>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>
            Look at my cat Luna. Isn't she so cute!
          </span>
          <img
            className={classes.postImg}
            src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
            alt=""
          />
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

// export default function Feed({ post }) {
//   const [like, setLike] = useState(post.like);
//   const [isLiked, setIsLiked] = useState(false);

//   const likeHandler = () => {
//     setLike(isLiked ? like - 1 : like + 1);
//     setIsLiked(!isLiked);
//   };
//   const classes = useStyles();

//   const Users = [
//     {
//       id: 1,
//       profilePicture: "assets/person/1.jpeg",
//       username: "Safak Kocaoglu",
//     },
//     {
//       id: 2,
//       profilePicture: "assets/person/2.jpeg",
//       username: "Janell Shrum",
//     },
//     {
//       id: 3,
//       profilePicture: "assets/person/3.jpeg",
//       username: "Alex Durden",
//     },
//     {
//       id: 4,
//       profilePicture: "assets/person/4.jpeg",
//       username: "Dora Hawks",
//     },
//     {
//       id: 5,
//       profilePicture: "assets/person/5.jpeg",
//       username: "Thomas Holden",
//     },
//     {
//       id: 6,
//       profilePicture: "assets/person/6.jpeg",
//       username: "Shirley Beauchamp",
//     },
//     {
//       id: 7,
//       profilePicture: "assets/person/7.jpeg",
//       username: "Travis Bennett",
//     },
//     {
//       id: 8,
//       profilePicture: "assets/person/8.jpeg",
//       username: "Kristen Thomas",
//     },
//     {
//       id: 9,
//       profilePicture: "assets/person/9.jpeg",
//       username: "Gary Duty",
//     },
//     {
//       id: 10,
//       profilePicture: "assets/person/10.jpeg",
//       username: "Safak Kocaoglu",
//     },
//   ];

//   return (
//     <div className={classes.post}>
//       <div className={classes.postWrapper}>
//         <div className={classes.postTop}>
//           <div className={classes.postTopLeft}>
//             <img
//               className={classes.postProfileImg}
//               src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
//               alt=""
//             />
//             <span className={classes.postUsername}>
//               {Users.filter((u) => u.id === post?.userId)[0].username}
//             </span>
//             <span className={classes.postDate}>{post.date}</span>
//           </div>
//           <div className={classes.postTopRight}>
//             <MoreVert />
//           </div>
//         </div>
//         <div className={classes.postCenter}>
//           <span className={classes.postText}>{post?.desc}</span>
//           <img className={classes.postImg} src={post.photo} alt="" />
//         </div>
//         <div className={classes.postBottom}>
//           <div className={classes.postBottomLeft}>
//             <img
//               className={classes.likeIcon}
//               src="assets/like.png"
//               onClick={likeHandler}
//               alt=""
//             />
//             <img
//               className={classes.likeIcon}
//               src="assets/heart.png"
//               onClick={likeHandler}
//               alt=""
//             />
//             <span className={classes.postLikeCounter}>
//               {like} people like it
//             </span>
//           </div>
//           <div className={classes.postBottomRight}>
//             <span className={classes.postCommentText}>
//               {post.comment} comments
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
