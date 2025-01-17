import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <h1>Welcome to E-commerce App</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <ProductList searchQuery={searchQuery} />
    </div>
  );
}

export default HomePage;
