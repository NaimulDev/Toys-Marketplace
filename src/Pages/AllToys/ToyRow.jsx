import React from "react";
import { Link } from "react-router-dom";

const ToyRow = ({ toy, handleToyDetails }) => {
  const { _id, sellerName, name, quantity, price, category_name } = toy;
  return (
    <tr className="text-center">
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{category_name}</td>
      <td>
        <Link to={`/info/${_id}`}>
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
