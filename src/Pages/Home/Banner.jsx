import React from "react";
import slider1 from "../../assets/banner/slide-1.png";
import slider2 from "../../assets/banner/slide-2.png";
import overlay from "../../assets/banner/Overlay.png";

const Banner = () => {
  return (
    <div className="relative">
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={slider1} className="w-full  " />
          <div
            data-aos="fade-down"
            className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 ml-16"
          >
            <h4 className="text-[#ff6f69] text-4xl ">Hot Trendy</h4>
            <h1 className="text-6xl font-bold my-7">Baby Kids Cloth</h1>
            <p className="text-sm font-bold text-slate-400 mb-4">
              Get Upto 30% Off On Your First Order
            </p>
            <button className=" btn-primary ">SHOP NOW</button>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full" />
          <div
            data-aos="fade-down"
            className="absolute transform -translate-y-1/2  right-40 top-1/2 mr-16"
          >
            <h4 className="text-[#ff6f69] text-4xl ">Hot Trendy</h4>
            <h1 className="text-6xl font-bold my-7">Baby Kids Cloth</h1>
            <p className="text-sm font-bold text-slate-400 mb-4">
              Get Upto 30% Off On Your First Order
            </p>
            <button className=" btn-primary ">SHOP NOW</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider1} className="w-full" />
          <div
            data-aos="fade-down"
            className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 ml-16"
          >
            <h4 className="text-[#ff6f69] text-4xl ">Hot Trendy</h4>
            <h1 className="text-6xl font-bold my-7">Baby Kids Cloth</h1>
            <p className="text-sm font-bold text-slate-400 mb-4">
              Get Upto 30% Off On Your First Order
            </p>
            <button className=" btn-primary ">SHOP NOW</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slider2} className="w-full" />
          <div
            data-aos="fade-down"
            className="absolute transform -translate-y-1/2  right-40 top-1/2 mr-16"
          >
            <h4 className="text-[#ff6f69] text-4xl ">Hot Trendy</h4>
            <h1 className="text-6xl font-bold my-7">Baby Kids Cloth</h1>
            <p className="text-sm font-bold text-slate-400 mb-4">
              Get Upto 30% Off On Your First Order
            </p>
            <button className=" btn-primary ">SHOP NOW</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 ">
        <img src={overlay} alt="" className="" />
      </div>
    </div>
  );
};

export default Banner;
