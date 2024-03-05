import Values from "values.js";
import ColorForm from "./components/ColorForm";
import { useState } from "react";
import ColorBlock from "./components/ColorBlock";
import ColorsContainer from "./components/ColorsContainer";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colorPallete, setColorPallete] = useState(
    new Values("#09225b").all(12)
  );
  const handleColorSubmit = (color) => {
    try {
      const newColors = new Values(color).all(15);
      setColorPallete(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const tints = colorPallete.filter((color) => color.type === "tint");
  const shades = colorPallete.filter((color) => color.type === "shade");

  const baseColor = colorPallete.filter((color) => color.type === "base");

  return (
    <main>
      <div
        className="base-color"
        style={{ background: `#${baseColor[0].hex}` }}
      ></div>

      <ColorForm onSubmit={handleColorSubmit} />
      <ColorsContainer className="tints-container">
        {tints.map((tint) => (
          <ColorBlock color={tint} key={tint.hex} />
        ))}
      </ColorsContainer>
      <ColorsContainer className="shades-container">
        {shades.map((shade) => (
          <ColorBlock color={shade} key={shade.hex} />
        ))}
      </ColorsContainer>
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
