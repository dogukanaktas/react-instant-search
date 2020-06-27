import React from "react";
import Dog from "./Dog";

const DogList = (props) => {
  const dogs = props.filteredDogs.map((item) => (
    <Dog key={item.id} name={item.name} breed={item.breed} />
  ));

  const list = {
    display: "grid",
    gridTemplateColumns: 'repeat(6, auto)',
    gridGap: '1em',
  };

  return (
    <div style={list} className="list">
      {dogs}
    </div>
  )
};

export default DogList;
