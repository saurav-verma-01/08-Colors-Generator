import Values from "values.js";
import ColorForm from "./components/ColorForm";
import { useState } from "react";
import ColorBlock from "./components/ColorBlock";
import ColorsContainer from "./components/ColorsContainer";

const App = () => {
  const [colorPallete, setColorPallete] = useState(
    new Values("#09225b").all(12)
  );
  const handleColorSubmit = (color) => {
    setColorPallete(new Values(color).all(12));
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
          <ColorBlock color={tint} />
        ))}
      </ColorsContainer>
      <ColorsContainer className="shades-container">
        {shades.map((shade) => (
          <ColorBlock color={shade} />
        ))}
      </ColorsContainer>
    </main>
  );
};
export default App;
