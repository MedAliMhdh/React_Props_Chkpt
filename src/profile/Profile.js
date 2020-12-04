import React from "react";
import ClickName from "./ClickName";
import PropTypes from "prop-types";

const Profile = (props) => {
  const pageStyle = {
    width: "1050px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert(`your name is ${props.fullName}`);
  };

  return (
    <div style={pageStyle}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {props.children}
      </div>

      <ClickName
        handleClick={handleClick}
        fullName={props.fullName}
      ></ClickName>

      <p style={{ fontFamily: "Source Code Pro", fontWeight: "bold" }}>
        {props.bio ||
          "Here you can tell more about your slef your career and whataever you want!"}
      </p>
      <h3 style={{ fontFamily: "Teko", fontSize: "32px" }}>
        {props.profession || "Your poition"}
      </h3>
    </div>
  );
};

Profile.protoType = {
  fullname: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.isRequired,
};

/* An other way to set default props values */
// Profile.defaultProps = {
//   fullName: "Your full name here",
//   bio:
//     "Here you can tell more about your slef your career and whataever you want!",
//   profession: "Your position",
// };

export default Profile;
