import jwt from "jsonwebtoken";
import cloudinary from "cloudinary";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    `${process.env.JWT_SECRET}`,
    { expiresIn: "30d" }
  );
};

export const cloud = () => {
  return cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};