import React from "react";
import Banner from "./Banner";
import KidsGallery from "./KidsGallery";
import Logo from "./Logo";
import SectionOne from "./SectionOne";
import TabsCategory from "./TabsCategory/TabsCategory";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="text-center mt-5">
        <Logo></Logo>
        <TabsCategory></TabsCategory>
        <h1 className="text-4xl font-bold my-4">Kids Gallery</h1>
        <KidsGallery />
        <Logo></Logo>
        <SectionOne></SectionOne>
      </div>
    </>
  );
};

export default Home;
