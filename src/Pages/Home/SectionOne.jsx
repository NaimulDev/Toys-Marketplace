import React from "react";
import cover from "../../assets/banner/cover.png";
import overlay from "../../assets/banner/OverlayBall.png";

const SectionOne = () => {
  return (
    <div className="my-16">
      <div className="relative">
        <img src={cover} alt="" className="w-full" />

        <div className="absolute transform -translate-y-1/2 left-5 top-1/2 ml-8 md:ml-16">
          <h4 className="text-2xl md:text-3xl font-semibold text-[#a8a8a8]">
            Welcome Baby Born
          </h4>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-3 md:mt-5 text-[#9363b5]">
            Care Your Baby
          </h1>
          <p className="font-semibold my-5 md:my-7 py-2 px-3 rounded-3xl bg-[#ccd6f5]">
            Flat 20% Off All Type Plant & Accessories
          </p>
          <button className="btn-primary">SHOP NOW</button>
        </div>

        <div className="absolute top-0 left-0 right-0 h-[80px] md:h-[120px]">
          <img src={overlay} alt="" className="w-full h-full" />
        </div>

        <div className="absolute bottom-0">
          <img src={overlay} alt="" className="rotate-180 h-auto max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
