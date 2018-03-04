import React from "react";
import Footer from "../containers/Footer.js";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { saveArticle } from "../actions/articleActions.js";

class EditForm extends React.Component {
  render() {
    const { handleSubmit, error, anyTouched } = this.props;
    console.log(error);
    const submit = values => {
      this.props.onSubmit(this.props.article.id, values.title, values.text);
    };
    return (
      <div className="article_container">
        <form onSubmit={handleSubmit(submit)}>
          <header>
            <h1>
              <Field name="title" component="input" type="text" required/>
            </h1>
            <div className="byline">
              <address className="author">
                By {this.props.article.author}
              </address>
            </div>
          </header>
          <section>
            <Field name="text" component="textarea" rows="10" type="text" required />
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
EditForm = reduxForm({})(EditForm);

EditForm = connect(
  (state, props) => ({
    form: "editForm" + props.article.id,
    initialValues: {
      title: props.article.title,
      text: props.article.text
    }
  }),
  dispatch => ({
    onSubmit: (id, title, text) => {
      dispatch(saveArticle(id, title, text));
    }
  })
)(EditForm);
export default EditForm;
