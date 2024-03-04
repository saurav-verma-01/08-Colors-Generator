import React from "react";

const ColorBlock = ({ color }) => {
  const { hex } = color;
  return (
    <div
      className="color-block"
      style={{ background: `#${hex}` }}
    >{`#${hex.toUpperCase()}`}</div>
  );
};

export default ColorBlock;
