import React from 'react';
import DateHelper from './DateHelper';
import { connect } from "react-redux";

class Title extends React.Component {
  render() {
    let result = (
      <footer>
        <time>{DateHelper.formatDate(this.props.date, true)}</time>
        <div className="buttons_group">
          <button onClick={this.props.handler}>Edit</button>
          <button>Delete</button>
        </div>
      </footer>
    );


    return result;
  }
}

export default connect(state => ({}), dispatch => ({}))(Title);