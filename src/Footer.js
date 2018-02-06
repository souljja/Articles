import React from 'react';
import DateHelper from './DateHelper';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
      isEditing: props.isEditing
    };
  }

  render() {
    let result = (
      <footer>
        <time>{DateHelper.formatDate(this.state.date, true)}</time>
        <div className="buttons_group">
          <button onClick={this.props.handler}>Edit</button>
          <button>Delete</button>
        </div>
      </footer>
    );


    return result;
  }
}

export default Title;