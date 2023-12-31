import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

const User = mongoose.model("users", UserSchema);
export default User;
