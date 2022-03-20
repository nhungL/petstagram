import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  post: {
    backgroundColor: "#FFFFFF",
    width: "95%",
    borderRadius: "20px",
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    margin: "30px 0",
  },

  postWrapper: {
    padding: "15px",
  },

  postTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  postTopLeft: {
    display: "flex",
    alignItems: "center",
  },

  postTopLeftText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  postProfileImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  postUsername: {
    fontSize: "15px",
    fontWeight: "500",
    margin: "0 10px 5px",
  },

  postDate: {
    fontSize: "12px",
    margin: "0 10px",
  },

  postCenter: {
    margin: "20px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  postImg: {
    marginTop: "20px",
    width: "100%",
    maxHeight: "500px",
    objectFit: "contain",
  },

  postBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  postBottomLeft: {
    display: "flex",
    alignItems: "center",
  },

  postLikeCounter: {
    fontSize: "15px",
  },

  postCommentText: {
    cursor: "pointer",
    borderBottom: "1px dashed gray",
    fontSize: "15px",
  },
}));
export default useStyles;

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
