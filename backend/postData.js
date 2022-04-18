import bcrypt from "bcryptjs";
// import userSchema from "./models/userModel";
const user = {
    firstname: "NTT",
    lastname: "LPL",
    email: "admin@email.com",
    password: bcrypt.hashSync("1234", 7),
    isAdmin: true,
    avatar: "",
    petname: "Hello Kitty",
    age: "",
    species: "",
    post: [],
}
const postData = {


  posts: [
    {
    //   id: "00",
      image: "This contains image",
      description: "Look at my cat Luna. Isn't she so cute!",
      like: 0,
      author: user,
    //   timestamps: now,
    },
  ],
};
export default postData;

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: "1.jpeg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: "2.jpeg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: "3.jpeg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: "4.jpeg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: "5.jpeg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: "6.jpeg",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: "7.jpeg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: "assets/post/8.jpeg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: "assets/post/9.jpeg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: "assets/post/10.jpeg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];