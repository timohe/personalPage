import React, { Component } from 'react';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Timeline from './components/Timeline'
import './App.css';
import './css/timeline.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Welcome />
      <h2 className="heading" id="projects">PROJECTS</h2>
      <Projects />
      <h2 className="heading" id="timeline">TIMELINE</h2>
      <Timeline />
      </div>
    );
  }
}

export default App;
