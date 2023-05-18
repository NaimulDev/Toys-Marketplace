import React from "react";
import logo from "../../../public/logo.jpg";
import img1 from ".././../assets/header/serviceimg-1.png";
import img2 from ".././../assets/header/serviceimg-2.png";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
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
