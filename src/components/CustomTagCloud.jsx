import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";


class CustomTagCloud extends Component {
	constructor() {
		super()
		this.state = {
			data: [
				{ value: "Reinforced Learning", count: 25, color: this.generateInitialColor() },
				{ value: "Smart Contracts", count: 18, color: this.generateInitialColor() },
				{ value: "Web-Development", count: 38, color: this.generateInitialColor() },
				{ value: "Outsourcing", count: 17, color: this.generateInitialColor() },
				{ value: "Project-Mgmt", count: 25, color: this.generateInitialColor() },
				{ value: "Prototyping", count: 20, color: this.generateInitialColor() },
				{ value: "Hosting", count: 22, color: this.generateInitialColor() },
				{ value: "Machine Learning", count: 21, color: this.generateInitialColor() },
				{ value: "Neural Networks", count: 27, color: this.generateInitialColor() },
				{ value: "Deep Learning", count: 30, color: this.generateInitialColor() },
				{ value: "Chatbots", count: 25, color: this.generateInitialColor() },
				{ value: "Economics", count: 30, color: this.generateInitialColor() },
				{ value: "Design Thinking", count: 18, color: this.generateInitialColor() },
			],
			selectedTag: "",
		};
	}

	generateInitialColor() {
		var value = Math.random() * 0xFF | 0;
		var grayscale = (value << 16) | (value << 8) | value;
		var color = '#' + grayscale.toString(16);
		return color;
	};

	setTagColor(color, tagValue) {
		if(tagValue === this.state.selectedTag){
			return "#00f2e7";
		}else{
			return color;
		}
	};

	customRenderer = (tag, size, color) => (
		<span key={tag.value}
			style={{
				margin: '3px',
				padding: '3px',
				// display: 'inline-block',
				fontSize: size,
				color: this.setTagColor(color, tag.value),
			}}>{tag.value}</span>
	);

	passDataToParent = (tag) => {
        {this.props.getDataFromChild(tag.value)};            
    }

	render() {
		return (
			<TagCloud minSize={18}
				maxSize={35}
				tags={this.state.data}
				className="simple-cloud"
				onClick={
					(tag) => {
						this.passDataToParent(tag);
						this.setState({
							selectedTag: tag.value,
						});
					}
				}
				renderer={this.customRenderer}
			/>
		);
	}
}

export default CustomTagCloud;