import React from "react";
import logo from "../../../public/logo.jpg";
import img1 from ".././../assets/header/serviceimg-1.png";
import img2 from ".././../assets/header/serviceimg-2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Link
        to="/"
        aria-label="toytown"
        title="Toy Town"
        className="inline-flex items-center"
      >
        <div className=" w-28 h-28 rounded-full ">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="flex">
        <div className="flex mr-11">
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="ml-2">
            <p className="font-bold">FREE DELIVERY</p>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="flex mr-14">
          <div>
            <img src={img2} alt="" />
          </div>
          <div className="ml-2">
            <p className="font-bold">MONEY BACK</p>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
