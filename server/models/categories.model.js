import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema({
    categoryID: String,
    name: String,
    children: [String],
    description: String,
    imageUrl: String
});

const Category = mongoose.model("categories", CategorySchema);
export default Category;
