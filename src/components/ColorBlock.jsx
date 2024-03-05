import React from "react";
import { toast } from "react-toastify";

const ColorBlock = ({ color }) => {
  const { hex } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color Copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy color to Clipboard");
      }
    } else {
    }
  };
  return (
    <div
      onClick={saveToClipboard}
      className="color-block"
      style={{ background: `#${hex}` }}
    >{`#${hex.toUpperCase()}`}</div>
  );
};

export default ColorBlock;
