import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      firstName: "NTT",
      lastname: "LPL",
      email: "admin@email.com",
      password: bcrypt.hashSync("1234", 7),
      isAdmin: true,
      avatar: "",
      petname: "",
      age: "",
      species: "",
      post: [],
    },
  ],
};
export default data;
