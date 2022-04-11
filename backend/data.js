import bcrypt from "bcryptjs";

const data = {
  users: [
    {
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
    },
  ],
};
export default data;
