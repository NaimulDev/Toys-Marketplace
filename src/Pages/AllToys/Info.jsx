import React from "react";
import { useLoaderData } from "react-router-dom";

const Info = () => {
  const detail = useLoaderData();
  // console.log(detail);
  const {
    photo,
    email,
    price,
    toyName,
    sellerName,
    quantity,
    rating,
    details,
  } = detail;
  return (
    <div className="max-w-6xl mx-auto my-12">
      <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Toy name: {toyName}</h2>
          <p>Seller name: {sellerName}</p>
          <p>Seller email: {email}</p>
          <p>
            Price: <span className="text-orange-500 font-semibold">$</span>
            {price}
          </p>
          <p>Rating: {rating}</p>
          <p>Available quantity: {quantity}</p>
          <p>Description: {details}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
