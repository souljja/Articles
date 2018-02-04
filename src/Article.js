import React from 'react';
import Title from "./Title.js";
import Footer from "./Footer.js";

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
            author={this.state.article.author} />
          <section>{this.state.article.text}</section>
        <Footer date={this.state.article.date}/></article>
      </div>
    );
  }
}

export default Article;