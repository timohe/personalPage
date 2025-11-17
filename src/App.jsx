import React, { Component } from "react";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import "./App.css";
import "./css/timeline.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Welcome />
			</div>
		);
	}
}

export default App;
