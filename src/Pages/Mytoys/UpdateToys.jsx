import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const toys = useLoaderData();
  const { quantity, price, details } = toys;
  const { _id } = toys;
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const details = form.details.value;
    const newToy = {
      price,
      quantity,
      details,
    };

    fetch(
      `https://toy-marketplace-server-dusky-eight.vercel.app/toyProducts/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl text-slate-950 font-bold mb-5">Update Toys</h1>

      <form onSubmit={handleUpdateToy} className="mx-auto lg:w-2/3">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="form-control w-full lg:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Quantity"
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control w-full lg:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Desciption</span>
          </label>
          <label className="input-group input-group-vertical">
            <textarea
              name="details"
              defaultValue={details}
              id="Details"
              cols="70"
              rows="5"
              className="border"
            ></textarea>
          </label>
        </div>

        <input
          type="submit"
          value="Update Toy"
          className="btn bg-primary hover:bg-secondary w-full mt-6"
        />
      </form>
    </div>
  );
};

export default UpdateToys;
