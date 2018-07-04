import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";
import AnimateHeight from 'react-animate-height';
import {test} from '../texts/projectDetails.js'

// https://madox2.github.io/react-tagcloud/
// https://github.com/Stanko/react-animate-height

class Projects extends Component {
	constructor() {
		super()
		this.state = {
			// for TagCloud
			data:
				[
					{ value: "Reinforced Learning", count: 25 }, { value: "Smart Contracts", count: 18 },
					{ value: "Web-Development", count: 38 }, { value: "Outsourcing", count: 17 },
					{ value: "Project-Mgmt", count: 25 }, { value: "Prototyping", count: 20 },
					{ value: "Hosting", count: 22 }, { value: "Machine Learning", count: 21 },
					{ value: "Neural Networks", count: 27 },
					{ value: "Deep Learning", count: 30 }, { value: "Chatbots", count: 25 },
					{ value: "Economics", count: 30, color: "blue" }, { value: "Design Thinking", count: 18 },
				],
			colorOptions: {
				// luminosity: 'dark',
				hue: 'monochrome'
			},
			// for exanding
			height: 0,
			expandedTitle: 'not defined yet',
			expandedText: 'not defined yet',
		};
	}

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

	render() {
		return (
			<div>
				<div>
					<TagCloud
						minSize={12}
						maxSize={35}
						tags={this.state.data}
						colorOptions={this.state.colorOptions}
						className="simple-cloud"
						onClick={
							(tag) => {
								this.expandDescription();
								this.setDescriptionTexts(tag.value);
							}
						}
						onMouseMove={
							() => {
								console.log("hovererd")
							}
						}
					/>
				</div>
				<div className ="light-border">
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
