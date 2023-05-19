import React from "react";
import TypeORM from "../../assets/banner/top.png";

const Topheader = () => {
  return (
    <>
      <div className="bg-black flex justify-between text-white px-24 ">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered bg-black text-white border-white"
            />
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
          <div className="form-control">
            <div className="input-group">
              <select className="select select-bordered bg-black text-white">
                <option disabled selected>
                  English
                </option>
                <option>Bangladesh </option>
              </select>
            </div>
          </div>

          <div className="form-control ">
            <div className="input-group ">
              <select className="select select-bordered bg-black text-white">
                <option disabled selected>
                  USD $
                </option>
                <option>BDT</option>
              </select>
            </div>
          </div>

          <div className="form-control ">
            <div className="input-group ">
              <select className="select select-bordered bg-black text-white">
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
