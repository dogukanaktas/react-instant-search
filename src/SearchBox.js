import React from "react";
import './index.css'

const SearchBox = ({ handleChange, searchDog }) => {
  const boxStyle = {
    border: "none",
    borderRadius: "26px",
    padding: "56px 85px",
    fontSize: "36px",
    textAlign: "center",
    boxShadow: "0 0 5px rgba(66,66,66,.75)",
    textShadow: "0px 0px 3px rgba(66,66,66,.75)",
    margin: "3em 0",
    background: "rgba(255, 255, 255, 0.35)",
    color: "rgb(143,101,77)",
    letterSpacing: '1px'
  };

  return (
    <div>
      <input
        style={boxStyle}
        className="searchBox"
        type="text"
        placeholder="Enter the dog name ..."
        value={searchDog}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchBox;
