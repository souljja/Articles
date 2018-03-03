import React from "react";
import Articles from "./Articles.js";
import MainHeader from "./MainHeader.js";
import AddForm from "./AddForm.js";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="main_container">
        <MainHeader />
        {this.props.isAddingArticle ? <AddForm /> : null}
        <div className="articles_container">
          <Articles />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  isAddingArticle: state.reducer.isAddingArticle
}), dispatch => ({}))(App);
