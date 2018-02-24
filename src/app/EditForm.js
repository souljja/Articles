import React from "react";
import Title from "./Title.js";
import Footer from "./Footer.js";
import DateHelper from "./DateHelper";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";

class EditForm extends React.Component {
  componentDidMount() {
    const initialFormData = {
      title: this.props.article.title,
      text: this.props.article.text
    };

    this.props.dispatch(initialize("editArticle", initialFormData));
  }

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;

    const submit = values => {
      this.props.onSubmit(this.props.article.id, values.title, values.text);
    };
    return (
      <div className="article_container">
        <form onSubmit={handleSubmit(submit)}>
          <header>
            <h1>
              <Field name="title" component="input" type="text" />{" "}
            </h1>
            <div className="byline">
              <address className="author">
                By {this.props.article.author}
              </address>
            </div>
          </header>
          <section>
            <Field name="text" component="textarea" rows="10" type="text" />
          </section>
          <Footer
            isEdit={this.props.article.isEdit}
            date={this.props.article.date}
            editHandler={this.props.editHandler}
            saveHandler={this.submit}
          />
        </form>
      </div>
    );
  }
}
EditForm = reduxForm({
  form: "editArticle" // имя формы в state (state.form.post)
})(EditForm);

EditForm = connect(
  state => [],
  dispatch => ({
    onSubmit: (id, title, text) => {
      dispatch({ type: "SAVE_ARTICLE", id: id, title: title, text: text });
    }
  })
)(EditForm);
export default EditForm;
