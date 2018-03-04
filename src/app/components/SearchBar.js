import React from "react";
import { connect } from "react-redux";
import { searchTrigger } from "../actions/searchActions.js";

class SearchBar extends React.Component {
  searchTrigger = () => {
    this.props.searchTrigger(this.searchInput.value);
  };

  render() {
    return (
      <div className="main_search">
        <input
          type="text"
          ref={ (input) => {
            this.searchInput = input;
          }}
          onChange={this.searchTrigger}
          placeholder=" &#x1F50D; Search article"
        />
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    searchTrigger: searchString => {
      dispatch(searchTrigger(searchString));
    }
  })
)(SearchBar);
