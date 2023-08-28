import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts($limit: Int!, $offset: Int!) {
    products(limit: $limit, offset: $offset) {
      _id
      productName
      brand
      description
      sku
      categories
      price
      specialPrice
      promotionText
      availableQuantity:
      isAvailable
      images
      packSize
    }
  }
`;

export const GET_PRODUCT_BY_CATEGORY = gql`
  query GetProductByCategory($categoryId: ID!, $limit: Int!, $offset: Int!) {
    productsByCategoryId(categoryId: $categoryId, limit: $limit, offset: $offset) {
      _id
      productName
      brand
      description
      sku
      categories
      price
      specialPrice
      promotionText
      availableQuantity:
      isAvailable
      images
      packSize
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories {
      _id
      categoryID
      name
      children
      description
      imageUrl
    }
  }`;
