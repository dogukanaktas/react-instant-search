import React from "react";
import Dog from "./Dog";
import "./index.css";

const DogList = (props) => {
  const dogs = props.filteredDogs.map((item) => (
    <Dog key={item.id} name={item.name} breed={item.breed} />
  ));

  return <div className="list">{dogs}</div>;
};

export default DogList;
