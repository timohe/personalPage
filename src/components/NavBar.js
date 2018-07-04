import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="NavBar">
          {/* <li className="nav-item nav-name">Timo Hegnauer</li> */}
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
          <li className="nav-item"><a href="#timeline" className="nav-link">CV</a></li>
          <li className="nav-item nav-last"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;