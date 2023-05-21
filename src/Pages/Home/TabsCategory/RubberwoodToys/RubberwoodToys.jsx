import React from "react";
import { useEffect, useState } from "react";
import Rubberwood from "./Rubberwood";

const RubberwoodToys = () => {
  const [rubberToys, setRubberwood] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-dusky-eight.vercel.app/rubberwood")
      .then((res) => res.json())
      .then((data) => setRubberwood(data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {rubberToys.map((car) => (
          <Rubberwood key={car._id} car={car}></Rubberwood>
        ))}
      </div>
    </div>
  );
};

export default RubberwoodToys;
