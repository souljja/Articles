import React from "react";
import Footer from "../containers/Footer.js";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addArticle, isAddingArticle } from "../actions/articleActions.js";

class AddForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    const addArticle = values => {
      this.props.onAddArticle(values.title, values.text, "Anonymous");
    };

    return (
      <div className="add-form_container">
        <div className="article_container">
          <form onSubmit={handleSubmit(addArticle)}>
            <header>
              <h1>
                <Field name="title" component="input" type="text" />
              </h1>
              <div className="byline">
                <address className="author">By Anonymous</address>
              </div>
            </header>
            <section>
              <Field name="text" component="textarea" rows="10" type="text" />
            </section>
            <Footer
              isEdit={this.props.isAddingArticle}
              date={new Date()}
              editHandler={this.props.onAddButtonClick}
              saveHandler={this.addArticle}
            />
          </form>
        </div>
      </div>
    );
  }
}
AddForm = reduxForm({})(AddForm);

AddForm = connect(
  state => ({
    form: "addForm",
    initialValues: {
      title: "",
      text: ""
    },
    isAddingArticle: state.reducer.isAddingArticle
  }),
  dispatch => ({
    onAddArticle: (title, text, author) => {
      dispatch(addArticle(title, text, author));
    },
    onAddButtonClick: () => {
      dispatch(isAddingArticle());
    }
  })
)(AddForm);
export default AddForm;
