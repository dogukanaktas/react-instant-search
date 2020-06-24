import React, { Component } from "react";
import DogList from "./DogList";
import SearchBox from "./SearchBox";
import "./index.css";

class App extends Component {
  state = {
    dogs: [
      {
        id: 1,
        name: "Max",
        breed: "Labrador",
      },
      {
        id: 2,
        name: "Sparky",
        breed: "German Shephard",
      },
      {
        id: 3,
        name: "Rex",
        breed: "Boxer",
      },
      {
        id: 4,
        name: "Sally",
        breed: "Poodle",
      },
      {
        id: 5,
        name: "George",
        breed: "Pitbull",
      },
      
    ],

    searchDog: "",
  };

  handleChange = (e) => {
    this.setState({
      searchDog: e.target.value,
    });
  };

  render() {
    const filteredDogs = this.state.dogs.filter((item) =>
      item.name.toLowerCase().includes(this.state.searchDog.toLowerCase())
    );

    return (
      <div style={container} className="container">
        <SearchBox
          handleChange={this.handleChange}
          searchDog={this.state.searchDog}
        />
        <div style={boxList}>
          <DogList filteredDogs={filteredDogs} />
        </div>
      </div>
    );
  }
}

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const boxList ={
  display: 'flex',
}
export default App;
