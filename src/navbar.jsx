import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white">
      <div className="flex flex-col p-5 m-3 justify-between  md:flex-row md:items-center">
        <div className="flex justify-between items-center p-1 m-2">
          <Link to="/">
            <img src="/images/logo.png" alt="" className="w-44 mt-3" />
          </Link>

          <div className=" flex p-1 rounded-full md:hidden cursor-pointer">
            <Link to="/signup">
              <img src="/images/user.png" alt="" className="mx-2" />
            </Link>
            <img src="/images/fav.png" alt="" className="mx-2" />

            <Link to="/cart">
              <img src="/images/cart.png" alt="" className="mx-2" />
            </Link>
          </div>
        </div>

        <div className="bg-[#e0bf9ef4] mt-4 p-3 py-3 rounded-full  items-center mx-auto md:mx-0 hidden">
          <a
            href="#"
            className="mx-2 py-2 px-4 hover:bg-[#a98766f4] hover:rounded-full hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="mx-2 py-2 px-4 hover:bg-[#a98766f4] hover:rounded-full hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="mx-2 py-2 px-4 hover:bg-[#a98766f4] hover:rounded-full hover:text-white"
          >
            Store
          </a>
          <a
            href="#"
            className="mx-2 py-2 px-4 hover:bg-[#a98766f4] hover:rounded-full hover:text-white"
          >
            Products
          </a>
        </div>
        <div className=" p-1 rounded-full hidden md:flex cursor-pointer">
          <Link to="/signup">
            <img src="/images/user.png" alt="" className="mx-4" />
          </Link>
          <img src="/images/fav.png" alt="" className="mx-4" />
          <Link to="/cart">
            <img src="/images/cart.png" alt="" className="mx-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
