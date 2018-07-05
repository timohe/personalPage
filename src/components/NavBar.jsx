import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="NavBar">
          {/* <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li> */}
          <li className="nav-item"><a href="#timeline" className="nav-link">Timeline</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;