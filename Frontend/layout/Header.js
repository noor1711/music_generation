import React, { Component } from "react";
import "./Header.css";
export class Header extends Component {
  render() {
    return (
      <div className="navBar">
        <nav className="navBarMid">
          <h1 className="music-gen-heading">Music Gen</h1>
        </nav>
      </div>
    );
  }
}

export default Header;
