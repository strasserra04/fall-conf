import React, { Component } from "react";
import UserLinks from "../UserLinks";
import "./ToolbarActions.scss";
import { Link } from "gatsby";

class Toolbar extends Component {
  render() {
    const { config } = this.props;
    return (
      <div className="toolbar-actions">
        <div className="userlinks-container">
          <UserLinks config={config} />
          <Link to="/account">Go to your account</Link>
        </div>
      </div>
    );
  }
}

export default Toolbar;
