import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  // Dummy data for product list
  const allProducts = [
    { id: 1, title: "Smart Phone", imageName: "product1.jpg", price: "Rs 17,999" },
    { id: 2, title: "Television", imageName: "product2.jpg", price: "Rs 47,999" },
    { id: 3, title: "Smart Watch", imageName: "product3.jpg", price: "Rs 1999" },
  ];

  useEffect(() => {
    const filteredProducts = searchQuery
      ? allProducts.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allProducts;

    setProducts((prevProducts) => {
      // Update the state only if the filteredProducts have changed
      const isSame =
        prevProducts.length === filteredProducts.length &&
        prevProducts.every((product, index) => product.id === filteredProducts[index].id);

      return isSame ? prevProducts : filteredProducts;
    });
  }, [searchQuery]);

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageName={product.imageName}
            price={product.price}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
