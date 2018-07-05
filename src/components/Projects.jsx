import React, { Component } from 'react';
// import { TagCloud } from "react-tagcloud";
import CustomTagCloud from "./CustomTagCloud";
import AnimateHeight from 'react-animate-height';
import { test } from '../texts/projectDetails.js'

// https://madox2.github.io/react-tagcloud/
// https://github.com/Stanko/react-animate-height

class Projects extends Component {
	constructor() {
		super()
		this.state = {
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

	getDataFromChild = (param) => {
        console.log(param);
    }

	render() {
		return (
			<div>
				<div>
					<CustomTagCloud 
						getDataFromChild={this.getDataFromChild}
					/>
				</div>
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
