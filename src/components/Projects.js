import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";
// https://madox2.github.io/react-tagcloud/

class Projects extends Component {
	constructor() {
		super()
		this.state = {
			data:
				[
					{ value: "Reinforced Learning", count: 25 }, { value: "Smart Contracts", count: 18 },
					{ value: "Web-Development", count: 38 }, { value: "Outsourcing", count: 30 },
					{ value: "Nodejs", count: 28 }, { value: "Project-Mgmt", count: 25 },
					{ value: "HTML5", count: 33 }, { value: "Prototyping", count: 20 },
					{ value: "Webpack", count: 22 }, { value: "Smart Contracts", count: 21 },
					{ value: "ECMAScript", count: 25 }, { value: "Machine Learning", count: 15 },
					{ value: "Mocha", count: 17 }, { value: "Neural Networks", count: 27 },
					{ value: "Deep Learning", count: 30 }, { value: "Chatbots", count: 15 },
					{ value: "Economics", count: 30 }, { value: "Design Thinking", count: 11 },
				],
				colorOptions: {
					// luminosity: 'dark',
					hue: 'monochrome'
				 }	
		};
	}

	render() {
		return (
			<TagCloud 
				minSize={12}
				maxSize={35}
				tags={this.state.data}
				colorOptions={this.state.colorOptions}
				className="simple-cloud"
				onClick={tag => alert(`'${tag.value}' was selected!`)}
			/>
		);
	}
}

export default Projects;
