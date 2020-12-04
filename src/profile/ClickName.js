import React from "react";

const ClickName = ({ handleClick, fullName }) => {
  return (
    <a
      style={{ fontFamily: "Teko", fontSize: "32px", fontWeight: "bold" }}
      onClick={handleClick}
    >
      {fullName || "Your full name here"}
    </a>
  );
};
export default ClickName;
