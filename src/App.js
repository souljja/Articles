import React from "react";
import ReactDOM from "react-dom";
import Articles from "./Articles.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main_container">
        <Articles />
      </div>
    );
  }
}

export default App;
