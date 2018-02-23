import React from "react";
import Title from "./Title.js";
import Footer from "./Footer.js";
import DateHelper from "./DateHelper";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";

class EditForm extends React.Component {
  componentDidMount() {
    console.log(this.props.article);
    const initialFormData = {
      title: this.props.article.title,
      text: this.props.article.text
    };

    this.props.dispatch(initialize("editArticle", initialFormData));
  }

  render() {
    console.log(this.props);
    const { handleSubmit} = this.props;

    const submit = values => {
      this.props.onSubmit(this.props.article.id, values.title, values.text);
    };
    return (
      <form onSubmit={handleSubmit(submit)}>
        <Field name="title" component="input" type="text" />
        <Field name="text" component="textarea" type="text" />
        <Footer
          isEdit={this.props.article.isEdit}
          date={this.props.article.date}
          editHandler={this.props.editHandler}
          saveHandler={this.submit}
        />
      </form>
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
