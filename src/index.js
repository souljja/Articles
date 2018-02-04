import React from 'react';
import ReactDOM from 'react-dom';
import Articles from './Articles.js';
import styles from './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "first"};
  }

  render() {
    return (
      <div className="main_container"> 
        <Articles />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
