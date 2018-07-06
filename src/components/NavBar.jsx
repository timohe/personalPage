import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class NavBar extends Component {
  render() {


    return (
      <div className="NavBar">
        <ul className="NavBarList">
          <li><Link to="#timeline" className="nav-link">Timeline</Link></li>
          <li><Link to="#projects" className="nav-link">Projects</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;