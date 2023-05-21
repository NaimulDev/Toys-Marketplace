import React from "react";
import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
  const { _id, sellerName, name, quantity, price, category } = toy;
  return (
    <tr className="text-center ">
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/info/${_id}`}>
          <button className="btn bg-primary hover:bg-secondary capitalize">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
