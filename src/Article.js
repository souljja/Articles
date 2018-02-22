import React from "react";
import Title from "./Title.js";
import Footer from "./Footer.js";
import DateHelper from "./DateHelper";
import { connect } from "react-redux";

class Article extends React.Component {
  save = newData => {};

  edit = () => {
    let current = this.props.articles[this.props.id];
    this.props.onEdit(this.props.id, !current.isEdit);
  };

  render() {
    let current = this.props.articles[this.props.id];
    return (
      <div className="article_container">
        <article>
          <Title
            isEdit={current.isEdit}
            title={current.title}
            author={current.author}
            saveHandler={this.save}
          />
          <section>{current.text}</section>
          <Footer
            isEdit={current.isEdit}
            date={current.date}
            editHandler={this.edit}
          />
        </article>
      </div>
    );
  }
}

export default connect(
  state => ({
    articles: state.reducer.articles
  }),
  dispatch => ({
    onEdit: (id, value) => {
      dispatch({ type: "TOGGLE_BUTTONS", id: id, isEdit: value });
    }
  })
)(Article);
