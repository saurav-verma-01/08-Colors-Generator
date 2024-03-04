import React from "react";

const ColorsContainer = ({ children, className }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default ColorsContainer;
