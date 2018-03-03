import React from "react";
import Title from "../containers/Title.js";
import Footer from "../containers/Footer.js";
import EditForm from "./EditForm.js";
import { connect } from "react-redux";
import { toggleButtons, deleteArticle } from "../actions/articleActions.js";

class Article extends React.Component {
  edit = () => {
    this.props.onEdit(this.props.id);
  };

  delete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    let current = this.props.articles.find(
      element => element.id === this.props.id
    );

    if (current && current.isEdit) {
      return <EditForm article={current} editHandler={this.edit} />;
    } else {
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
              deleteHandler={this.delete}
            />
          </article>
        </div>
      );
    }
  }
}

export default connect(
  state => ({
    articles: state.reducer.articles
  }),
  dispatch => ({
    onEdit: id => {
      dispatch(toggleButtons(id));
    },
    onDelete: id => {
      dispatch(deleteArticle(id));
    }
  })
)(Article);
