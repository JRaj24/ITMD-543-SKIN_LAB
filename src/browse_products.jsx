import React, { useState } from "react";
import { Link } from "react-router-dom";
import Serums from "./serums";
import data from "./data";

export default function BrowseProducts() {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filterCategory, setFilterCategory] = useState("all"); // State for filter

  // Filter products based on search term and category
  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || product.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#f2c48b] p-5">
      <h1 className="text-5xl font-bold text-center mt-10 mb-5">Our Products</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for products..."
          className="p-3 w-full md:w-1/2 border rounded-lg mb-4 md:mb-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter Dropdown */}
        <select
          className="p-3 w-full md:w-1/4 border rounded-lg"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="skincare">Skincare</option>
          <option value="body care">Body Care</option>
          <option value="hair care">Hair Care</option>
        </select>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product.id} to={`/${product.id}`}>
              <Serums
                name={product.name}
                price={product.price}
                img={product.img}
              />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
}
