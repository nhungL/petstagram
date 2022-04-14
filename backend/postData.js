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
