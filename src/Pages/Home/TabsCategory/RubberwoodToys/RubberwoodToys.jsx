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
      <div className="grid md:grid-cols-3 gap-3 md:mx-14">
        {rubberToys.map((rubber) => (
          <Rubberwood key={rubber._id} rubber={rubber}></Rubberwood>
        ))}
      </div>
    </div>
  );
};

export default RubberwoodToys;
