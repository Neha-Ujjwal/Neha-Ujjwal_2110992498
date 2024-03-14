import React from "react";
import Logo from "../assets/images/logo.jpg";
import bookNow from "../assets/images/bookNow.png";
import cabInfo from "../assets/images/cab_info.png";

const Navbar = () => {
  return (
    <header className=" bg-white shadow-md flex items-center justify-between px-8 py-2 ">
      <h1 className="w-3/12">
        <a href="">
          <img src={Logo} style={{ width: "110px", height: "auto" }} />
        </a>
      </h1>

      <div className="w-3/12 flex justify-end">
        <nav className="flex justify-between font-semibold text-lg">
          <a href="" className="md:hidden">
            <img src={bookNow} style={{ height: "25px" }} />
          </a>

          <a href="" className="md:block hidden">
            <button
              className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Book Now
            </button>
          </a>

          <a href="" className="md:hidden ml-4">
            <img src={cabInfo} style={{ height: "25px" }} />
          </a>

          <a href="" className="md:block hidden ml-4">
            <button
              className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              All Cab Status
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
