import { useEffect, useState } from "react";

import Soft from "./Soft";

const SoftToys = () => {
  const [softToys, setSoftToys] = useState([]);

  useEffect(() => {
    // fetch('https://y-pearl-eight.vercel.app/carRobot')
    fetch("https://toy-marketplace-server-dusky-eight.vercel.app/softToys")
      .then((res) => res.json())
      .then((data) => setSoftToys(data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {softToys.map((soft) => (
          <Soft key={soft._id} soft={soft}></Soft>
        ))}
      </div>
    </div>
  );
};

export default SoftToys;
