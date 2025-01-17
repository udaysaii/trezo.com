import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, title, imageName, price }) => {
  // Dynamically construct the image URL
  const imageUrl = `/images/${imageName}`;

  return (
    <Link to={`/product/${id}`} className="product-card">
      <img
        src={imageUrl}
        alt={title}
        className="product-image"
        // onError={(e) => {
        //   e.target.onerror = null; // Prevent infinite loop if fallback fails
        //   e.target.src = "/images/default.jpg"; // Fallback image
        // }}
      />
      <h3>{title}</h3>
      <p>{price}</p>
    </Link>
  );
};

export default ProductCard;
