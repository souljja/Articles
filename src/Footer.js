import React from 'react';
import DateHelper from './DateHelper';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
      isEdit: false
    };
  }

  hoverHandler = () => {
    this.setState({ isEdit: !this.state.isEdit });
  }

  render() {
    let result = (
      <footer>
        <time>{DateHelper.formatDate(this.state.date, true)}</time>
        <div className="buttons_group">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </footer>
    );


    return result;
  }
}

export default Title;