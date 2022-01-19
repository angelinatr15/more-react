import { useState } from "react";
import Cat from "./Cat";

const CatList = () => {
  const [cats, setCats] = useState([
    {
      name: "Jiggy",
      color: "Black and White",
      age: 2,
    },
    {
      name: "Roe",
      color: "Black and White and Orange",
      age: 3,
    },
    {
      name: "Goose",
      color: "Black and White",
      age: 4,
    },
  ]);

  return (
    <div>
      <h3>Cat List</h3>
      {cats.map((kitty) => (
        <Cat
          key={kitty.name}
          name={kitty.name}
          color={kitty.color}
          age={kitty.age}
        />
      ))}
    </div>
  );
};

export default CatList;
