import React from "react";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import useProducts from "../../../utils/useProducts";
import Dropdown from "../../molecules/Dropdown/Dropdown";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import Card from "../../organisms/Card/Card";
import "./Products.scss";
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, GET_PRODUCT_BY_CATEGORY } from "../../../graphql/querries";
import { MEDIA_URL } from "../../../utils/variables";
import { useParams } from "react-router-dom";

export default function Products() {
  let query, productKey;
  let variables = {
    limit: 20,
    offset: 0
  };
  let { id } = useParams();
  if (id) {
    query= GET_PRODUCT_BY_CATEGORY;
    variables.categoryId = id;
    productKey = 'productsByCategoryId';
  } else {
    query = GET_ALL_PRODUCTS;
    productKey = 'products';
  }
  
  let { loading: categoryLoading, error: categoryError, data: categoryData } = useQuery(GET_ALL_CATEGORIES);
  let { loading: productsLoading, error: productsError, data: productsData } = useQuery(query, { variables });
  const { filteredCategory, filteredProduct, handleProduct } = useProducts();
  const browserWidth = useMediaQuery("(max-width: 480px)");
  if (categoryLoading || productsLoading) return <>Loading..</>;
  return (
    <main className="product-container">
      {browserWidth ? (
        <Dropdown
          items={[...categoryData?.categories, { id: "", name: "All Products" }]}
          handleProduct={handleProduct}
          filteredProduct={productsData[productKey]}
        />
      ) : (
        <Sidebar
          filteredCategory={categoryData?.categories}
          handleProduct={handleProduct}
        />
      )}
      <main className="product-container__card">
        {productsData[productKey].map((product) => (
          <Card
            key={product._id}
            id={product._id}
            imageUrl={MEDIA_URL + (product.images.length ? product.images[0] : "")}
            name={product.productName}
            price={product.price}
            stock={product.availableQuantity}
            text={product.description}
          />
        ))}
      </main>
    </main>
  );
}
