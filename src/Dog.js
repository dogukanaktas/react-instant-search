import React from "react";

const Dog = ({ name, breed }) => {
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    borderRadius: "16px",
    boxShadow: "1px 1px 5px",
    padding: "1em",
    fontWeight: "700",
    background: "rgba(28, 23, 23, 0.18)",
    width: "14em",
    height: "9em",
    margin: "0 1em",
    textAlign: "center",
    textShadow: "1px 1px 8px #000",
    letterSpacing: ".7px",
  };

  const nameStyle = {
    color: "rgb(255, 83, 83)",
    marginBottom: ".7em",
    fontSize: "24px",
  };

  const breedStyle = {
    color: "rgb(232, 122, 74)",
    fontSize: "22px",
  };

  return (
    <div style={listStyle}>
      <h3 style={nameStyle}>Name: {name}</h3>
      <h4 style={breedStyle}>Breed: {breed}</h4>
    </div>
  );
};

export default Dog;
