import React from "react";
import { Link } from "react-router-dom";

const SingleMyToy = ({ mt, handleDelete }) => {
  const { _id, sellerName, toyName, quantity, price, category } = mt;
  return (
    <tr className="text-center">
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>
        <Link>
          <button className="btn btn-outline btn-secondary capitalize">
            Update
          </button>
        </Link>
      </td>
      <td>
        <Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline btn-secondary capitalize"
          >
            Delete
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleMyToy;
