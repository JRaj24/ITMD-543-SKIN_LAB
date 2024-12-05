import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "./data";
import { ShopContext } from "./shopContext";
import { useNavigate } from "react-router-dom";
export default function Details() {
  const { addToCart, cartItems } = useContext(ShopContext);

  const params = useParams();
  const productId = Number(params.Productid);

  const product = Data.find((product) => product.id === productId);

  const [wishlist, setWishlist] = useState(false);

  const favToggle = () => {
    setWishlist((prevState) => !prevState);
  };

  const itemAmount = cartItems[productId];

  const navigate = useNavigate();

  const cart = () => {
    addToCart(productId);
    navigate.push(`/cart?productId=${productId}`);
  };

  return (
    <div>
      <h1 className="text-center text-white font-bold text-5xl"></h1>
      {product ? (
        <div>
          <div className="flex flex-col justify-start items-center p-5  rounded-3xl md:flex-row md:mt-5">
            <div className="flex flex-col justify-center items-center p-5 pt-5 pb-5 m-5 ">
              <img
                src={product.img}
                alt=""
                className="rounded-3xl max-w-xs md:max-w-sm md:mx-10"
              />
              
            </div>

            <div className="flex flex-col justify-start ml-10 -mt-5 items-center md:max-w-xl md:items-start">
              <h2 className="text-[#f2c48b] mt-8 text-4xl font-bold text-center md:text-left md:mt-0">
                {product.name}
              </h2>
              <p className="text-[#f2c48b] mt-5 text-2xl font-bold">
                ₹{product.price}
              </p>
              <h3 className="text-black mt-10 font-meduim text-xl text-center md:text-left">
                {product.description}
              </h3>

              <div className="flex items-center mt-12 justify-center">
                <button
                  className="bg-[#d0bea7] hover:border hover:border-[#d0bea7]  hover:bg-black hover:text-[#c49358] duration-300 w-40 mx-4 mt-6 uppercase font-semibold px-2 py-4 rounded-lg"
                  id="cart"
                  onClick={cart}
                  // onClick={() => addToCart(productId)}
                >
                  Add to cart {itemAmount > 0 && <>({itemAmount})</>}
                </button>

                <button
                  className="bg-[#d0bea7] flex items-center justify-center hover:border hover:border-[#d0bea7] hover:bg-black hover:text-[#c49358] duration-300 w-40 mx-auto mt-6 uppercase font-semibold px-2 py-4 rounded-lg md:mx-5"
                  onClick={favToggle}
                >
                  wishlist
                  <img
                    src={
                      wishlist ? "/images/onclick.png" : "/images/wishlist.png"
                    }
                    alt=""
                    className="mx-2"
                    id="wishlist"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
