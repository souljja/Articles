import React from 'react';
import Article from "./Article";

var articles = [
  {
    title:'first',
    date: new Date(),
    author: 'Jack London',
    text: 'Some text'
  },
  {
    title: 'second',
    date: new Date(),
    author: 'Jack London',
    text: 'Some text'
  }
];


class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {articles:articles};
  }

  render() {
    return (this.state.articles.map(article => {
     return <Article key={article.title} article={article}/>
    }));
  }
}

export default Articles;