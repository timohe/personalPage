import React, { Component } from 'react';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import Projects from './components/Projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Welcome />
      <h2 className="heading" id="projects">PROJECTS</h2>
      <Projects />
      </div>
    );
  }
}

export default App;
