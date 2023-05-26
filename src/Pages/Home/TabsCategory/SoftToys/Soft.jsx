import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Soft = ({ soft }) => {
  const { _id, img, name, price, rating } = soft;
  return (
    <div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        className="card md:w-96 mx-3 h-fit bg-base-100 shadow-xl"
      >
        <figure>
          <img src={img} alt="robot" className="md:h-72" />
        </figure>
        <div className="card-body flex-col items-center">
          <h2 className="card-title sub_title">{name}</h2>
          <p className="sub_desc">
            <small className="text-2xl">
              Price: <span>${price}</span>
            </small>
          </p>
          <div className="flex">
            <p className="sub_desc">
              <small className="">
                Rating:
                <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
              </small>
            </p>
          </div>
          <div className="md:text-right text-center">
            <Link to={`/info/${_id}`}>
              <button className="logout_btn">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soft;
