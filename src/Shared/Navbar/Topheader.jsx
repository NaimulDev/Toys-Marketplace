import React from "react";
import TypeORM from "../../assets/banner/top.png";

const Topheader = () => {
  return (
    <>
      <div className="bg-[#222222] flex flex-col md:flex-row justify-between text-white px-4 md:px-24">
        <div className="form-control border-b-2 border-gray-700 mb-4 md:mb-0">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search Our Category"
              className="input input-bordered bg-[#222222] text-white h-10"
            />
            <h1 className="text-3xl font-light text-slate-500"> | </h1>
            <button className="text-white ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="inline-flex">
          <div className="form-control mb-4 md:mb-0 md:mr-4">
            <div className="input-group">
              <select className="select select-bordered bg-[#222222] text-white">
                <option disabled selected>
                  English
                </option>
                <option>Bangladesh</option>
              </select>
            </div>
          </div>

          <div className="form-control mb-4 md:mb-0 md:mr-4">
            <div className="input-group">
              <select className="select select-bordered bg-[#222222] text-white">
                <option disabled selected>
                  USD $
                </option>
                <option>BDT</option>
              </select>
            </div>
          </div>

          <div className="form-control">
            <div className="input-group">
              <select className="select select-bordered bg-[#222222] text-white">
                <option disabled selected>
                  Account
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topheader;
