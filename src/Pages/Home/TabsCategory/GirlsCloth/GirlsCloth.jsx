import React from "react";
import { useEffect, useState } from "react";
import Girls from "./Girls";

const GirlsCloth = () => {
  const [girlsCloth, setGirlsCloth] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-dusky-eight.vercel.app/girlsCloth")
      .then((res) => res.json())
      .then((data) => setGirlsCloth(data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {girlsCloth.map((car) => (
          <Girls key={car._id} car={car}></Girls>
        ))}
      </div>
    </div>
  );
};

export default GirlsCloth;
