import React, { useEffect, useState } from "react";
import ToyRow from "./ToyRow";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState([false]);
  const handleShowAll = () => {
    setShowAll(true);
  };
  const url =
    "https://toy-marketplace-server-dusky-eight.vercel.app/toyProducts";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(
      `https://toy-marketplace-server-dusky-eight.vercel.app/toySearchText/${data}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  /* Ascending Descending handler */
  const handlerAscending = () => {
    fetch(
      "https://toy-marketplace-server-dusky-eight.vercel.app/ascendingPrice"
    )
      .then((res) => res.json())
      .then((data) => setRobotToys(data));
  };
  const handlerDescending = () => {
    fetch(
      "https://toy-marketplace-server-dusky-eight.vercel.app/descendingPrice"
    )
      .then((res) => res.json())
      .then((data) => setRobotToys(data));
  };
  return (
    <div className="max-w-6xl mx-auto my-12">
      <div className="flex justify-between mb-14">
        <div className="form-control">
          <div className="input-group justify-center">
            <input
              onChange={(e) => setData(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button
              onClick={handleSearch}
              className="btn btn-square bg-secondary hover:bg-primary"
            >
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
        <div className=" space-x-6 mr-32">
          <button
            className="btn bg-secondary hover:bg-primary"
            onClick={handlerAscending}
          >
            ascendingPrice
          </button>
          <button
            onClick={handlerDescending}
            className="btn bg-secondary hover:bg-primary"
          >
            descendingPrice
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-gray-200">
          <thead>
            <tr className="text-center ">
              <th className="text-lg capitalize">Seller Name</th>
              <th className="text-lg capitalize">Toy Name</th>
              <th className="text-lg capitalize">Sub-category</th>
              <th className="text-lg capitalize">Price</th>
              <th className="text-lg capitalize">Available Quantity</th>
              <th className="text-lg capitalize">View Details button</th>
            </tr>
          </thead>
          <tbody>
            {toys.slice(0, showAll ? 50 : 20).map((toy) => (
              <ToyRow key={toy._id} toy={toy} setToys={setToys}></ToyRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center m-5">
        {!showAll && (
          <button
            onClick={handleShowAll}
            className="btn bg-primary hover:bg-secondary"
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default AllToys;
