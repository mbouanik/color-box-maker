import React from "react";

const Box = ({ height, width, bgc, id, removeBox }) => {
  return (
    <>
      <button onClick={() => removeBox(id)}> X </button>
      <div
        style={{
          height: height,
          width: width,
          backgroundColor: bgc,
        }}
      ></div>
    </>
  );
};

export default Box;
