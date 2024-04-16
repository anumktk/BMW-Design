import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md w-full ">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-black">
        {/* logo here */}
        {/* <div className="flex text-2xl cursor-pointer items-center gap-2">
          <img src={car} alt="dumbells" className="h-10 w-10" />
          <h1 className="font-bold ">BMW</h1>
        </div> */}
        <div>
          <button className="font-bold bg-blue-600 text-white py-2 px-6 text-2xl">
            BMW
          </button>
        </div>
        {/* nav links */}
        <ul className="md:flex pl-9 md:pl-0 font-semibold mr-8">
          <li className="my-7 md:my-0 md:ml-8 text-white hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="my-7 md:my-0 md:ml-8 text-white hover:underline">
            <Link to="/About us">About us</Link>
          </li>
          <li className="my-7 md:my-0 md:ml-8 text-white hover:underline">
            <Link to="/Designs">Designs</Link>
          </li>
          <button className="bg-black border-white border hover:border-2 text-white py-1 px-3 md:ml-8 ">
            Pricing
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
