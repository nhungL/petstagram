import React from "react";
import useStyles from "./Style";
import { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";
import { Users, Posts } from "../../dummyData";
//test data
// const Posts = [
//   {
//     id: 1,
//     desc: "Love For All, Hatred For None.",
//     photo: "photo",
//     date: "5 mins ago",
//     userId: 1,
//     like: 32,
//     comment: 9,
//   },
//   {
//     id: 2,
//     photo: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
//     date: "15 mins ago",
//     userId: 2,
//     like: 2,
//     comment: 1,
//   },
//   {
//     id: 3,
//     desc: "Every moment is a fresh beginning.",
//     photo: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
//     date: "1 hour ago",
//     userId: 3,
//     like: 61,
//     comment: 2,
//   },
//   {
//     id: 4,
//     photo: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
//     date: "4 hours ago",
//     userId: 4,
//     like: 7,
//     comment: 3,
//   },
//   {
//     id: 5,
//     photo: "photo",
//     date: "5 hours ago",
//     userId: 5,
//     like: 23,
//     comment: 5,
//   },
//   {
//     id: 6,
//     photo: "photo",
//     date: "1 day ago",
//     userId: 6,
//     like: 44,
//     comment: 6,
//   },
//   {
//     id: 7,
//     desc: "Never regret anything that made you smile.",
//     photo: "photo",
//     date: "2 days ago",
//     userId: 7,
//     like: 52,
//     comment: 3,
//   },
//   {
//     id: 8,
//     photo: "photo",
//     date: "3 days ago",
//     userId: 8,
//     like: 15,
//     comment: 1,
//   },
//   {
//     id: 9,
//     desc: "Change the world by being yourself.",
//     photo: "photo",
//     date: "5 days ago",
//     userId: 9,
//     like: 11,
//     comment: 2,
//   },
//   {
//     id: 10,
//     photo: "photo",
//     date: "1 week ago",
//     userId: 10,
//     like: 104,
//     comment: 12,
//   },
// ];

// const Users = [
//   {
//     id: 1,
//     profilePicture: "no-profile-picture.png",
//     username: "Safak Kocaoglu",
//   },
//   {
//     id: 2,
//     profilePicture: "https://wallpaperaccess.com/full/6295120.jpg",
//     username: "Janell Shrum",
//   },
//   {
//     id: 3,
//     profilePicture: "no-profile-picture.png",
//     username: "Alex Durden",
//   },
//   {
//     id: 4,
//     profilePicture: "https://pbs.twimg.com/media/DxRCJxmWsAA2yqi.jpg",
//     username: "Dora Hawks",
//   },
//   {
//     id: 5,
//     profilePicture: "no-profile-picture.png",
//     username: "Thomas Holden",
//   },
//   {
//     id: 6,
//     profilePicture: "no-profile-picture.png",
//     username: "Shirley Beauchamp",
//   },
//   {
//     id: 7,
//     profilePicture: "no-profile-picture.png",
//     username: "Travis Bennett",
//   },
//   {
//     id: 8,
//     profilePicture:
//       "https://dthezntil550i.cloudfront.net/ou/latest/ou2009170412086260016840777/1280_960/c446f863-b1b3-47fb-b2ea-87a6aaa9b6ac.png",
//     username: "Kristen Thomas",
//   },
//   {
//     id: 9,
//     profilePicture: "no-profile-picture.png",
//     username: "Gary Duty",
//   },
//   {
//     id: 10,
//     profilePicture:
//       "https://marketplace.canva.com/EAEeO4U2XBM/1/0/1600w/canva-pink-and-yellow-cat-modern-hand-drawn-abstract-twitch-profile-picture--lGNrdmHvS4.jpg",
//     username: "Safak Kocaoglu",
//   },
// ];

export default function Feed({ userId }) {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const classes = useStyles();
  return (
    <div>
      {Users.map((u) =>
        <div className={classes.post}>
          <div className={classes.postWrapper}>
            <div className={classes.postTop}>
              <div className={classes.postTopLeft}>
                <Avatar className={classes.postProfileImg}>
                  {u.avatar}
                </Avatar>
                <div className={classes.postTopLeftText}>
                  <span className={classes.postUsername}>
                    {u.firstname}
                  </span>
                  <span className={classes.postDate}>a long time</span>
                </div>
              </div>
              <div className={classes.postTopRight}>
                <MoreVert />
              </div>
            </div>
            <div className={classes.postCenter}>
              <span className={classes.postText}>
                Look at my cat Luna. Isn't she so cute!
                {/* {post?.desc} */}
              </span>
              <img
                className={classes.postImg}
                // src={post.image}
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
      )
      }
    </div>
  );
}
    // <div className={classes.post}>
    //   <div className={classes.postWrapper}>
    //     <div className={classes.postTop}>
    //       <div className={classes.postTopLeft}>
    //         {/* <Avatar className={classes.postProfileImg}>
    //         {Users.map((u) => u.id === post?.author)[0].avatar}
    //         </Avatar> */}
    //         <div className={classes.postTopLeftText}>
    //           <span className={classes.postUsername}>
    //           {Users.map((u) => u.id === post?.author)[0].firstname}
    //           </span>
    //           <span className={classes.postDate}>a long time</span>
    //         </div>
    //       </div>
    //       <div className={classes.postTopRight}>
    //         <MoreVert />
    //       </div>
    //     </div>
    //     <div className={classes.postCenter}>
    //       <span className={classes.postText}>
    //         Look at my cat Luna. Isn't she so cute!
    //         {/* {post?.desc} */}
    //       </span>
    //       <img
    //         className={classes.postImg}
    //         // src={post.image}
    //         src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
    //         alt=""
    //       />
    //     </div>
    //     <div className={classes.postBottom}>
    //       <div className={classes.postBottomLeft}>
    //         <Button
    //           className={classes.likeIcon}
    //           startIcon={<Favorite />}
    //           onClick={likeHandler}
    //           style={{ color: isLiked ? "#E33A15" : "#C4C4C4" }}
    //         />
    //         <span className={classes.postLikeCounter}>{like}</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// }

// export default function Feed({ post }) {
//   const [like, setLike] = useState(post.like);
//   const [isLiked, setIsLiked] = useState(false);

//   const likeHandler = () => {
//     setLike(isLiked ? like - 1 : like + 1);
//     setIsLiked(!isLiked);
//   };
//   const classes = useStyles();
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