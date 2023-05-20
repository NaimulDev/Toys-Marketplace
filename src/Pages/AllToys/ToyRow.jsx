import React from "react";
import { Link } from "react-router-dom";

const ToyRow = ({ toy, handleToyDetails }) => {
  const { _id, sellerName, toyName, quantity, price, category } = toy;
  return (
    <tr className="text-center">
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>
        <Link to={`/information/${_id}`}>
          <button
            onClick={() => handleToyDetails(_id)}
            className="btn btn-secondary capitalize"
          >
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
