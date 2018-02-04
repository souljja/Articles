import React from 'react';
import DateHelper from './DateHelper';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: props.title,
      author: props.author,
      isEdit: false
    };
  }

  render() {
    let result = (
      <header>
        <h1>{this.state.title}</h1>
        <div className="byline">
          <address className="author">By {this.state.author}</address>
        </div>
      </header>
    );
    
    
    return result;
  }
}

export default Title;