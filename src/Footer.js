import React from "react";
import DateHelper from "./DateHelper";
import { connect } from "react-redux";
import MdEdit from "react-icons/lib/md/edit";
import MdDelete from "react-icons/lib/md/delete";
import MdSave from "react-icons/lib/md/save";
import MdCancel from "react-icons/lib/md/cancel";

class Title extends React.Component {
  render() {
    let buttons;
    if (!this.props.isEdit) {
      buttons = (
        <div className="buttons_group">
          <button
            onClick={this.props.editHandler}
            className="btn btn-outline-primary"
          >
            <MdEdit />
          </button>
          <button className="btn btn-outline-primary">
            <MdDelete />
          </button>
        </div>
      );
    } else {
      buttons = (
        <div className="buttons_group">
          <button className="btn btn-outline-primary">
            <MdSave />
          </button>
          <button
            onClick={this.props.editHandler}
            className="btn btn-outline-primary"
          >
            <MdCancel />
          </button>
        </div>
      );
    }

    let result = (
      <footer>
        <time>{DateHelper.formatDate(this.props.date, true)}</time>
        {buttons}
      </footer>
    );

    return result;
  }
}

export default Title;
