import React from "react";
import { connect } from "react-redux";
import { isAddingArticle } from "../actions/articleActions.js";

class MainHeader extends React.Component {
  addHandler = () => {
    this.props.onAddButtonClick();
  };
  render() {
    let button = !this.props.isAddingArticle ? (
      <button className="btn btn-outline-primary" onClick={this.addHandler}>
        Add
      </button>
    ) : null;
    return (
      <header className="main_header">
        <h1>Diary</h1>
        {button}
      </header>
    );
  }
}

export default connect(
  state => ({
    isAddingArticle: state.reducer.isAddingArticle
  }),
  dispatch => ({
    onAddButtonClick: () => {
      dispatch(isAddingArticle());
    }
  })
)(MainHeader);
