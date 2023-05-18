import React from "react";
import Marquee from "react-fast-marquee";
import kid1 from "../../assets/gallery/gallery-1.png";
import kid2 from "../../assets/gallery/gallery-2.png";
import kid3 from "../../assets/gallery/gallery-3.png";
import kid4 from "../../assets/gallery/gallery-4.png";
import kid5 from "../../assets/gallery/gallery-5.png";
import kid6 from "../../assets/gallery/gallery-6.png";
import kid7 from "../../assets/gallery/gallery-7.png";
import kid8 from "../../assets/gallery/gallery-8.png";

import LogoMarquee from "./LogoMarquee";

const KidsGallery = () => {
  const kidsImages = [kid1, kid2, kid3, kid4, kid5, kid6, kid7, kid8];

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 justify-center">
        {kidsImages.map((image, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image}
              alt={`Kid ${index + 1}`}
              className="w-96 h-64 object-cover rounded hover:brightness-110"
            />
          </div>
        ))}
      </div>
      {/* Marque */}

      <Marquee className="my-24 ">
        <LogoMarquee></LogoMarquee>
      </Marquee>
    </>
  );
};

export default KidsGallery;
