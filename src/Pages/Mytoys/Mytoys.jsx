import React, { useContext, useEffect, useState } from "react";
import SingleMyToy from "./SingleMyToy";
import Swal from "sweetalert2";
import { AuthContext } from "../../Router/AuthProvider";

const Mytoys = () => {
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);

  const url = `https://toy-marketplace-server-dusky-eight.vercel.app/toyProducts?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToy(data);
      });
  }, []);

  const handleDelete = (_id) => {
    const click = confirm("Are you sure you want to delete");
    if (click) {
      fetch(
        `https://toy-marketplace-server-dusky-eight.vercel.app/toyProducts/${_id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            Swal.fire({
              title: "Success!",
              text: "Delete toys successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
            const remaining = myToy.filter((mt) => mt._id !== _id);
            setMyToy(remaining);
          }
        });
    }
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
              <th className="text-lg capitalize">Update</th>
              <th className="text-lg capitalize">Remove</th>
            </tr>
          </thead>
          <tbody>
            {myToy.map((mt) => (
              <SingleMyToy
                key={mt._id}
                mt={mt}
                setMyToy={setMyToy}
                handleDelete={handleDelete}
              ></SingleMyToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mytoys;
