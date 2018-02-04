import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: props.title,
      author: props.author,
      date: props.date
    };
  }

  render() {
    //<time pubdate>{this.state.date.toString()}</time>
    return (
      <header>
        <h1>{this.state.title}</h1>
        <div className="byline">
          <address className="author">By {this.state.author}</address>
          <time>{this.state.date.toLocaleDateString("ru")}</time>
        </div>
      </header>
    );
  }
}

export default Title;