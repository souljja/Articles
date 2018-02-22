import React from "react";
import DateHelper from "./DateHelper";
import { connect } from "react-redux";

class Title extends React.Component {

  onChange = (event) => {
    //console.log(event);
    this.value = event.target.value;
    console.log(this.value);
  }

  render() {
    let title = null;
    if (!this.props.isEdit) {
      title = <h1>{this.props.title}</h1>;
    } else {
      title = (
        <h1>
          <input defaultValue={this.props.title} ref={(input) => { this.value = input; }}required />
        </h1>
      );
    }
    let result = (
      <header>
        {title}
        <div className="byline">
          <address className="author">By {this.props.author}</address>
        </div>
      </header>
    );
    return result;
  }
}

export default connect(state => ({}), dispatch => ({}))(Title);
