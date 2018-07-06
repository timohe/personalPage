import React, { Component } from 'react';

class NavBar extends Component {
  render() {


    return (
      <div className = "NavBar">
        <ul className="NavBarList">
          <li><a href="#timeline" className="nav-link">Timeline</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;