import React, { useEffect, useState } from "react";
import ToyRow from "./ToyRow";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  const url = "http://localhost:5000/toys";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleToyDetails = (_id) => {
    // console.log('btn delete');
  };
  return (
    <div className="max-w-6xl mx-auto my-12">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-gray-200">
          <thead>
            <tr className="text-center">
              <th className="text-lg capitalize">Seller Name</th>
              <th className="text-lg capitalize">Toy Name</th>
              <th className="text-lg capitalize">Sub-category</th>
              <th className="text-lg capitalize">Price</th>
              <th className="text-lg capitalize">Available Quantity</th>
              <th className="text-lg capitalize">View Details button</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToyRow
                key={toy._id}
                toy={toy}
                setToys={setToys}
                handleToyDetails={handleToyDetails}
              ></ToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
