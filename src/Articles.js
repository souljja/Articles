import React from "react";
import Article from "./Article";
import { connect } from "react-redux";

const getVisibleArticles = (articles, filter) => {
  switch (filter) {
    case "SHOW_ARCHIVED": {
      return articles.filter(article => !article.isActive);
    }
    case "SHOW_ACTIVE": {
      return articles.filter(article => article.isActive);
    }
    default: {
      return articles;
    }
  }
};

const mapStateToProps = state => {
  return {
    articles: getVisibleArticles(state.articles, state.articleFilter)
  };
};

class Articles extends React.Component {
  render() {
    let list = this.props.articles.map(article => {
      return <Article key={article.title} article={article} />;
    });

    return list;
  }
}

export default connect(mapStateToProps, dispatch => ({}))(Articles);
