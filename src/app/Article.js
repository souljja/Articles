import React from "react";
import Title from "./containers/Title.js";
import Footer from "./containers/Footer.js";
import EditForm from "./EditForm.js";
import { connect } from "react-redux";

class Article extends React.Component {
  save = newData => {};

  edit = () => {
    let current = this.props.articles.find(
      element => element.id === this.props.id
    );
    this.props.onEdit(this.props.id, !current.isEdit);
  };

  delete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    let current = this.props.articles.find(
      element => element.id === this.props.id
    );
    let editForm = null;

    if (current && current.isEdit) {
      return <EditForm article={current} editHandler={this.edit} />;
    }
    return (
      <div className="article_container">
        {editForm}
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
            deleteHandler={this.delete}
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
    },
    onDelete: id => {
      dispatch({ type: "DELETE_ARTICLE", id: id });
    }
  })
)(Article);
