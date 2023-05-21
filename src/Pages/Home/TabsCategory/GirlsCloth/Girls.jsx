import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const Girls = ({ girl }) => {
  const { _id, img, name, price, rating } = girl;
  return (
    <div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        className="card md:w-96 mx-3 h-fit bg-base-100 shadow-xl"
      >
        <figure>
          <img src={img} alt="toys" className="md:h-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title sub_title">{name}</h2>
          <p className="sub_desc">
            <small>
              Price: <span className="text-3xl">${price}</span>
            </small>
          </p>
          <div className="flex items-center">
            {" "}
            {/* Added flex and items-center */}
            <p className="sub_desc">
              <small>
                Rating:
                <Rating
                  className="ml-1" // Added Tailwind CSS marginLeft class
                  style={{ maxWidth: 25 }}
                  value={Math.round(rating || 0)}
                  readOnly
                />
              </small>
            </p>
          </div>
          <div className="md:text-right text-center">
            <Link to={`/details/${_id}`}>
              <button className="logout_btn">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Girls;
