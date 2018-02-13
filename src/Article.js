import React from "react";
import Title from "./Title.js";
import Footer from "./Footer.js";
import DateHelper from "./DateHelper";
import { connect } from "react-redux";

class Article extends React.Component {
  render() {
    return (
      <div className="article_container">
        <article>
          <Title
            title={this.props.article.title}
            author={this.props.article.author}
            isEditing={this.props.isEditing}
          />
          <section>{this.props.article.text}</section>
          <Footer
            date={this.props.article.date}
            handler={this.handler}
            isEditing={this.props.isEditing}
          />
        </article>
      </div>
    );
  }
}

export default connect(state => ({}), dispatch => ({}))(Article);
