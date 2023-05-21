import React from "react";
import Swal from "sweetalert2";
import useTitle from "../../useTitle";

const Addtoys = () => {
  useTitle("Add Toys");
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const img = form.img.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const addToys = {
      img,
      name,
      sellerName,
      email,
      category,
      price,
      rating,
      quantity,
      details,
    };

    fetch("https://toy-marketplace-server-dusky-eight.vercel.app/toyProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add toys successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-2 md:py-4 md:px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Add Toys</h2>
        </div>
        <form onSubmit={handleAddToy}>
          <div className="md:flex mb-2 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Picture URL of the toy
                </span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  name="img"
                  placeholder="Picture URL of the toy"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Toy Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-2 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Seller Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="sellerName"
                  placeholder="Seller Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Seller Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-2 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Sub-category
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Sub-category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-2 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Rating
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Available quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Available quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-2 gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Detail description
                </span>
              </label>
              <textarea
                name="details"
                id=""
                cols="30"
                rows="10"
                placeholder="Detail description"
                className="input input-bordered w-full"
              ></textarea>
            </div>
          </div>
          <div className="text-center my-7">
            <input
              type="submit"
              className="btn-primary capitalize"
              value="Add Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addtoys;
