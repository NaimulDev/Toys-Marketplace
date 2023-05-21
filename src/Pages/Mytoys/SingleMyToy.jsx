import React from "react";
import { Link } from "react-router-dom";

const SingleMyToy = ({ mt, handleDelete }) => {
  const { _id, sellerName, name, quantity, price, category } = mt;

  // const handleUpdateToy = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const quantity = form.quantity.value;
  //   const price = form.price.value;
  //   const details = form.details.value;
  //   const newToy = {
  //     price,
  //     quantity,
  //     details,
  //   };

  //   fetch(`https://toy-marketplace-server-dusky-eight.vercel.app/coffee/${_id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newToy),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount > 0) {
  //         Swal.fire({
  //           title: "success!",
  //           text: "Coffee Update Successfully ",
  //           icon: "success",
  //           confirmButtonText: "Cool",
  //         });
  //       }
  //     });
  // };
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
            className=" btn btn-outline btn-secondary capitalize"
          >
            Update
          </label>
        </Link>

        {/* Put this part before </body> tag */}
        {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative ">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2 text-red-700"
            >
              ✕
            </label>
            <h1>UPDATE TOY DETAILS</h1>
            <h3 className="text-lg font-bold">Toy Name: {name}</h3>
            <form onSubmit={handleUpdateToy}>
              <div className="form-control items-center">
                <div className=" ">
                  <label className="label">
                    <span className="label-text">Enter amount</span>
                  </label>
                  <label className="input-group my-6">
                    <span>Price</span>
                    <input
                      type="text"
                      placeholder="10"
                      className="input input-bordered"
                    />
                    <span>USD</span>
                  </label>
                </div>

                <div className="mb-4">
                  <label className="">
                    <h5>quantity</h5>
                  </label>

                  <label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>
                <div className="mb-4 relative">
                  <label>
                    <h5>Description</h5>
                  </label>
                  <label>
                    <textarea
                      placeholder="Bio"
                      name="details"
                      className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                    ></textarea>
                  </label>
                </div>

                <button
                  className="bg-primary rounded-xl py-1 w-full"
                  type="submit"
                  value="update Toy"
                >
                  update Toy
                </button>
              </div>
            </form>
          </div>
        </div> */}
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
