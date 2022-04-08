import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
    {
        petname: { type: String, required: true },
        age: { type: String, required: false },
        species: { type: String, required: false }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("Pet", petSchema);
export default Pet;