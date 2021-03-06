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
    articles: getVisibleArticles(
      state.reducer.articles,
      state.reducer.articleFilter
    ).filter(article => {
      let search = state.search.toUpperCase();
      return (
        article.title.toUpperCase().includes(search) ||
        article.text.toUpperCase().includes(search) ||
        article.author.toUpperCase().includes(search)
      );
    })
  };
};

class Articles extends React.Component {
  render() {
    let list = this.props.articles.map(article => {
      return <Article key={article.id} id={article.id} />;
    });
    return <div className="articles_container">{list}</div>;
  }
}

export default connect(mapStateToProps, dispatch => ({}))(Articles);
