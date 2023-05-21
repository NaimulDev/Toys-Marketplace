import React from "react";
import { useEffect, useState } from "react";
import Girls from "./Girls";

const GirlsCloth = () => {
  const [carRobot, setCarRobot] = useState([]);

  useEffect(() => {
    // fetch('https://y-pearl-eight.vercel.app/carRobot')
    fetch("https://toy-marketplace-server-dusky-eight.vercel.app/girlsCloth")
      .then((res) => res.json())
      .then((data) => setCarRobot(data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {carRobot.map((car) => (
          <Girls key={car._id} car={car}></Girls>
        ))}
      </div>
    </div>
  );
};

export default GirlsCloth;
