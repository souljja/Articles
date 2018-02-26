import React from "react";
import Articles from "./Articles.js";
import MainHeader from "./MainHeader.js";

class App extends React.Component {
  render() {
    return (
      <div className="main_container">
        <MainHeader />
        <Articles />
        <button className="btn btn-outline-primary">Add</button>
      </div>
    );
  }
}

export default App;
