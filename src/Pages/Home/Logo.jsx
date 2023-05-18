import React from "react";
import logo from "../../assets/logo/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-t-2 border-b-2 border-gray-500 flex items-center">
        <div className="border-r-2 border-gray-500">
          <img src={logo} alt="Logo" className="rounded-full" />
        </div>
        <div className="border-l-2 border-gray-500">
          <img src={logo} alt="Logo" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
