import React from 'react';
import ReactDOM from 'react-dom';


class Article extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>Hello World</div>)
  }
}

ReactDOM.render(<Article />, document.getElementById('root'));
