import Serums from "./serums";
import data from "./data.js";
import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="bg-[#f2c48b]" id="Product">
      {/* Delivery, Payment, and Return Section */}
      <div className="flex flex-col justify-center items-center mt-10 md:flex-row">
        <div className="flex flex-col justify-center items-center md:flex-row md:mt-24 border-b border-t pt-7 pb-5 border-black">
          <div className="flex m-3 mx-10 items-center mt-24 md:mt-0">
            <img src="/images/delivery.png" alt="Delivery" />
            <h2 className="text-2xl font-medium mx-5 min-w-full">Fast Delivery</h2>
          </div>
          <div className="flex m-3 mx-10 items-center">
            <img src="/images/payment.png" alt="Secure Payments" />
            <h2 className="text-2xl font-medium mx-5">Secure Payments</h2>
          </div>
          <div className="flex m-3 mx-10 items-center">
            <img src="/images/return.png" alt="Return Policy" />
            <h2 className="text-2xl font-medium mx-5">Return Policy</h2>
          </div>
        </div>
      </div>

      {/* Headings */}
      <h1 className="text-4xl mt-24 md:text-7xl text-center uppercase text-black md:max-w-xl italic mx-auto">
        Choose the skincare that
      </h1>
      <h1 className="text-6xl md:text-6xl font-bold text-center uppercase text-[#594024]">
        suits you the best
      </h1>

      {/* Quiz Section */}
      <div className="flex justify-center items-center mt-10">
        <h3 className="p-2 mx-3 md:mx-0 text-lg font-medium">
          Don't know your skin type?
        </h3>
        <Link
          to="/quiz"
          className="bg-black text-white text-center w-32 font-semibold px-1 py-3 rounded-lg md:mx-10 cursor-pointer"
        >
          Take a Quiz!
        </Link>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-5">
        {data.map((product) => (
          <Link key={product.id} to={`/${product.id}`}>
            <Serums
              name={product.name}
              price={product.price}
              img={product.img}
            />
          </Link>
        ))}
      </div>

    </div>
  );
}
