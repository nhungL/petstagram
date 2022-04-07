import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userfirstname: { type: String, required: true },
        userlastname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        pet: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Pet"
            }
        ],
        post: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
            }
        ]
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
export default User;