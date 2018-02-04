import React from 'react';
import Title from "./Title.js";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {article:props.article};
  }

  render() {
    return (
      <div>
        <article>
          <Title title={this.state.article.title}
            date={this.state.article.date}
            author={this.state.article.author} />
        {this.state.article.text}</article>
      </div>
    );
  }
}

export default Article;