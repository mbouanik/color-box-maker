import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };
  return (
    <>
      <NewBoxForm addBox={addBox} />

      <div className="BoxList-Boxes">
        {boxes.map((box) => (
          <Box
            id={box.id}
            width={box.width}
            height={box.height}
            bgc={box.bgc}
            key={box.id}
            removeBox={removeBox}
          />
        ))}
      </div>
    </>
  );
};

export default BoxList;
