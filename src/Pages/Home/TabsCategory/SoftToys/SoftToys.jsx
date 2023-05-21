import { useEffect, useState } from "react";

import Soft from "./Soft";

const SoftToys = () => {
  const [carRobot, setCarRobot] = useState([]);

  useEffect(() => {
    // fetch('https://y-pearl-eight.vercel.app/carRobot')
    fetch("https://toy-marketplace-server-dusky-eight.vercel.app/softToys")
      .then((res) => res.json())
      .then((data) => setCarRobot(data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {carRobot.map((car) => (
          <Soft key={car._id} car={car}></Soft>
        ))}
      </div>
    </div>
  );
};

export default SoftToys;
