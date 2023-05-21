import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import GirlsCloth from "./GirlsCloth/GirlsCloth";
import RubberwoodToys from "./RubberwoodToys/RubberwoodToys";
import SoftToys from "./SoftToys/SoftToys";

const TabsCategory = () => {
  return (
    <div className=" pb-16 bg-gradient-to-r from-[#c7dedb] to-[#eed9b4]">
      <div className="text-center md:pt-20 pt-10 mb-10 mx-3">
        <h2
          data-aos="fade-up"
          className="md:text-5xl text-3xl font-Lobster font-semibold pb-3"
        >
          Sub Category
        </h2>
        <p
          data-aos="fade-down"
          className="md:w-[480px] mx-auto text-lg font-open text-description-color"
        >
          The history of robotics for kids can be traced back to the emergence
          of educational robotics in the late 20th century. Here are some key
          milestones and developments
        </p>
      </div>
      <div className="my_container">
        <Tabs className="text-center">
          <TabList>
            <Tab>
              <span className="sub_nav text_gradient">Soft Toys</span>
            </Tab>
            <Tab>
              <span className="sub_nav">Teddy toys</span>
            </Tab>
            <Tab>
              <span className="sub_nav">Girl's Cloth</span>
            </Tab>
          </TabList>

          <div className="mt-7">
            <TabPanel>
              <SoftToys />
            </TabPanel>
            <TabPanel>
              <RubberwoodToys />
            </TabPanel>
            <TabPanel>
              <GirlsCloth />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsCategory;
