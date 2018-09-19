import React, { Component } from 'react';
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
		this.setState({
			height: 'auto',
		});
	};
	
	getDataFromChild = (param) => {
		var formatedTag = param.replace(/[^\w]/gi, '')
		this.setState({
			expandedTitle: param,
			expandedText: test[formatedTag],
		});
    }

	render() {
		return (
			<div>
					<CustomTagCloud 
						getDataFromChild={this.getDataFromChild}
						expandDescription={this.expandDescription}
					/>
					<AnimateHeight
						duration={500}
						height={this.state.height} // see props documentation bellow
					>
						<p className = "projectDetails">{this.state.expandedText}</p>
					</AnimateHeight>
			</div>
		);
	}
}

export default Projects;
