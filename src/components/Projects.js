import React, { Component } from 'react';
// import { TagCloud } from "react-tagcloud";
import TagCloud from "./Tagcloud.js";
import AnimateHeight from 'react-animate-height';
import { test } from '../texts/projectDetails.js'

// https://madox2.github.io/react-tagcloud/
// https://github.com/Stanko/react-animate-height

class Projects extends Component {
	constructor() {
		super()
		this.state = {
			// for TagCloud
			// data:
			// 	[
			// 		{ value: "Reinforced Learning", count: 25, color: this.generateInitialColor() },
			// 		{ value: "Smart Contracts", count: 18, color: this.generateInitialColor() },
			// 		{ value: "Web-Development", count: 38, color: this.generateInitialColor() },
			// 		{ value: "Outsourcing", count: 17, color: this.generateInitialColor() },
			// 		{ value: "Project-Mgmt", count: 25, color: this.generateInitialColor() },
			// 		{ value: "Prototyping", count: 20, color: this.generateInitialColor() },
			// 		{ value: "Hosting", count: 22, color: this.generateInitialColor() },
			// 		{ value: "Machine Learning", count: 21, color: this.generateInitialColor() },
			// 		{ value: "Neural Networks", count: 27, color: this.generateInitialColor() },
			// 		{ value: "Deep Learning", count: 30, color: this.generateInitialColor() },
			// 		{ value: "Chatbots", count: 25, color: this.generateInitialColor() },
			// 		{ value: "Economics", count: 30, color: this.generateInitialColor() },
			// 		{ value: "Design Thinking", count: 18, color: this.generateInitialColor() },
			// 	],
			// for exanded view
			height: 0,
			expandedTitle: 'not defined yet',
			expandedText: 'not defined yet',
		};
	}


	// changeColor = () => {
	// 	this.setState({
	// 		// data: color= '#00f2e7'
	// 	});
	// 	return 
	// }

	
	expandDescription = () => {
		const { height } = this.state;
		this.setState({
			// height: height === 0 ? 'auto' : 0,
			height: 'auto',
		});
	};
	setDescriptionTexts = (tagValue) => {
		//filters out all special characters except digits, characters, underscores 
		//stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
		var formatedTag = tagValue.replace(/[^\w]/gi, '')
		let text = "this would be the text"

		this.setState({
			expandedTitle: tagValue,
			expandedText: test[formatedTag],
		});
	};


	customRenderer = (tag, size, color) => (
		<span key={tag.value}
			style={{
				// animation: 'blinker 3s linear infinite',
				// animationDelay: `${Math.random() * 2}s`,
				fontSize: `${size}em`,
				border: `2px solid ${color}`,
				margin: '3px',
				padding: '3px',
				display: 'inline-block',
				color: 'white',
			}}>{tag.value}
		</span>
	);




	render() {
		return (
			<div>
				<TagCloud/>
				
				<div className="light-border">
					<AnimateHeight
						duration={500}
						height={this.state.height} // see props documentation bellow
					>
						<h1>{this.state.expandedTitle}</h1>
						<p>{this.state.expandedText}</p>
					</AnimateHeight>
				</div>
			</div>
		);
	}
}

export default Projects;
