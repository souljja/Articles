import React from "react";

class Title extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <div className="byline">
          <address className="author">By {this.props.author}</address>
        </div>
      </header>
    );
  }
}

export default Title;
