import React from "react";
import Dog from "./Dog";

const DogList = (props) => {
  const dogs = props.filteredDogs.map((item) => (
    <Dog key={item.id} name={item.name} breed={item.breed} />
  ));

  const list = {
    display: "flex",
    alignItems: 'center'
  };

  return (
    <div style={list}>
      {dogs}
    </div>
  )
};

export default DogList;
