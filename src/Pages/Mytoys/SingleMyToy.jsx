import React from "react";
import { Link } from "react-router-dom";

const SingleMyToy = ({ mt, handleDelete }) => {
  const { _id, sellerName, name, quantity, price, category } = mt;

  return (
    <tr className="text-center">
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>
        <Link to={`/updatetoy/${_id}`}>
          <label
            htmlFor="my-modal-3"
            className=" btn btn-outline bg-primary hover:bg-secondary capitalize"
          >
            Update
          </label>
        </Link>
      </td>
      <td>
        <Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline bg-primary hover:bg-secondary capitalize"
          >
            Delete
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleMyToy;
