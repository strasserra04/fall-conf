import React, { Component } from "react";
import "./ToolbarActions.scss";
import { Link } from "gatsby";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar-actions">
        <div className="userlinks-container">
          <Link to="/account">Go to your account</Link>
        </div>
      </div>
    );
  }
}

export default Toolbar;
