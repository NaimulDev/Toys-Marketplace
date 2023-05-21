import React from "react";
import logo from "../../../public/logo.jpg";
import img1 from ".././../assets/header/serviceimg-1.png";
import img2 from ".././../assets/header/serviceimg-2.png";
import { Link } from "react-router-dom";
import Topheader from "./Topheader";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Topheader></Topheader>
      <div className="header-top ">
        <div className="flex justify-between mx-4 md:mx-20">
          <Link
            to="/"
            aria-label="toytown"
            title="Toy Town"
            className="inline-flex items-center"
          >
            <div className="rounded-full">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
          </Link>
          <div className="flex mt-3">
            <div className="flex mr-2 md:mr-11 cursor-pointer  flip-card">
              <div className=" flip-card-inner ">
                <img src={img1} alt="" className=" " />
              </div>

              <div className="ml-2">
                <p className="font-bold ">FREE DELIVERY</p>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="flex mr-2 md:mr-14 cursor-pointer flip-card">
              <div className="flip-card-inner">
                <img src={img2} alt="" />
              </div>
              <div className="ml-2">
                <p className="font-bold">MONEY BACK</p>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
