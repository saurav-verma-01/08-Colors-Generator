import React, { useState } from "react";

const ColorForm = () => {
  const [color, setColor] = useState("#09225b");

  const handleColorChange = (e) => {
    e.preventDefault();
    // console.log(e);
    setColor(e.target.value);
  };
  return (
    <section className="color-form">
      <form>
        <label htmlFor="color" className="color-label">
          Pick Color{" "}
        </label>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={handleColorChange}
          className="color-picker"
        />
        <input
          type="text"
          placeholder="#09225b;"
          value={color}
          onChange={handleColorChange}
          className="color-input"
          style={{ color: color, border: `2px solid ${color}` }}
        />
        <button
          className="submit-btn"
          type="submit"
          style={{ background: color }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ColorForm;
