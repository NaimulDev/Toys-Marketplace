import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Girls = ({ girl }) => {
  const { _id, img, name, price, rating } = girl;
  return (
    <div className="">
      <div
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        className="card md:w-96 mx-3 h-fit bg-base-100 shadow-xl "
      >
        <figure>
          <img src={img} alt="toys" className="md:h-72" />
        </figure>
        <div className="card-body text-center flex flex-col items-center">
          <h2 className="card-title sub_title">{name}</h2>
          <p className="sub_desc">
            <small className="text-2xl">
              Price: <span>${price}</span>
            </small>
          </p>
          <div className="flex items-center">
            {" "}
            {/* Added flex and items-center */}
            <p>
              <small>
                <Rating
                  // Added Tailwind CSS marginLeft class
                  style={{ maxWidth: 150 }}
                  value={rating}
                  readOnly
                />
              </small>
            </p>
          </div>
          <div className="md:text-right text-center">
            <Link to={`/details/${_id}`}>
              <button className="btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Girls;
