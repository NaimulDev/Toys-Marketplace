import React from "react";
import logo1 from "../../assets/logo/1.jpg";
import logo2 from "../../assets/logo/2.jpg";
import logo3 from "../../assets/logo/3.jpg";
import logo4 from "../../assets/logo/4.jpg";
import logo5 from "../../assets/logo/5.jpg";
import logo6 from "../../assets/logo/6.png";

const LogoMarquee = () => {
  const logo = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <div className="flex gap-10">
      {logo.map((image, index) => (
        <div key={index} className="">
          <img
            src={image}
            alt={`Kid ${index + 1}`}
            className="cursor-pointer object-cover rounded hover:brightness-110"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoMarquee;
