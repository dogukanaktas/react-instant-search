import React, { Component } from "react";
import DogList from "./DogList";
import SearchBox from "./SearchBox";
import dogData from './dogData'
import "./index.css";

class App extends Component {
  state = {
    dogs: dogData,

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
        <div className="boxList">
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



export default App;
