export const typeDefs = `#graphql
type Query {
    categories: [Category]
    category(id: ID!): Category
    products(limit: Int!, offset: Int!):[Product]
    productsByCategoryId(categoryId: ID!, limit: Int!, offset: Int!): [Product]
    product(id: ID!): Product
}

type Category {
    _id: String
    categoryID: String
    name: String
    children: [String]
    description: String
    imageUrl: String
}

type Product {
    _id: String
    productName: String
    brand: String
    description: String
    sku: String
    categories: [String]
    price: String
    specialPrice: String
    promotionText: String
    availableQuantity: Int
    isAvailable: Boolean
    images: [String]
    packSize: String
}
`;
