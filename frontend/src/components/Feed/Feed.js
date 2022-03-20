import React from "react";
import useStyles from "./Style";
import { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";

//test data
const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo:
      "https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/16:9/w_3999,h_2249,c_limit/MtFuji-GettyImages-959111140.jpg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/joe-ciciarelli-qWVL0Io50PQ-unsplash.jpg?crop=1120,0,4480,4480&wid=640&hei=640&scl=7.0",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo:
      "https://i.guim.co.uk/img/media/03734ee186eba543fb3d0e35db2a90a14a5d79e3/0_173_5200_3120/master/5200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9c30ed97ea8731f3e2a155467201afe3",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo:
      "https://www.mercurynews.com/wp-content/uploads/2018/11/MPO-L-HOLIDAYS-1130.jpg?w=525",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo:
      "https://imageserver.petsbest.com/website/home_new/pets-best-pet-insurance.jpg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo:
      "https://westballantyneanimalhospital.com/wp-content/uploads/2021/04/pets-1.jpg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo:
      "https://www.crn.com/resources/025c-0f3247198c32-7caef631a12d-1000/pets.jpg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];

const Users = [
  {
    id: 1,
    profilePicture: "no-profile-picture.png",
    username: "Safak Kocaoglu",
  },
  {
    id: 2,
    profilePicture: "https://wallpaperaccess.com/full/6295120.jpg",
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: "no-profile-picture.png",
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: "https://pbs.twimg.com/media/DxRCJxmWsAA2yqi.jpg",
    username: "Dora Hawks",
  },
  {
    id: 5,
    profilePicture: "no-profile-picture.png",
    username: "Thomas Holden",
  },
  {
    id: 6,
    profilePicture: "no-profile-picture.png",
    username: "Shirley Beauchamp",
  },
  {
    id: 7,
    profilePicture: "no-profile-picture.png",
    username: "Travis Bennett",
  },
  {
    id: 8,
    profilePicture:
      "https://dthezntil550i.cloudfront.net/ou/latest/ou2009170412086260016840777/1280_960/c446f863-b1b3-47fb-b2ea-87a6aaa9b6ac.png",
    username: "Kristen Thomas",
  },
  {
    id: 9,
    profilePicture: "no-profile-picture.png",
    username: "Gary Duty",
  },
  {
    id: 10,
    profilePicture:
      "https://marketplace.canva.com/EAEeO4U2XBM/1/0/1600w/canva-pink-and-yellow-cat-modern-hand-drawn-abstract-twitch-profile-picture--lGNrdmHvS4.jpg",
    username: "Safak Kocaoglu",
  },
];

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