import Category from "../models/categories.model.js";
import Product from "../models/products.model.js";

export const resolvers = {
  Query: {
    products: async () => await Product.find({}),
    productsByCategoryId: async (_, { categoryId }) => await Product.find({categories: categoryId}),
    product: async (_, { id }) => await Product.findOne({ _id: id }),
    categories: async () => await Category.find({children: {$ne: []}}),
    category: async (_, { id }) => await Category.findOne({ categoryID: id })
  }
};
