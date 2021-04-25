import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";


class CustomTagCloud extends Component {
	constructor() {
		super()
		this.state = {
			data: [
				{ value: "Click-Me", count: 19, color: '#000000'},
				{ value: "Startups", count: 32, color: this.generateInitialColor() },
				{ value: "Data-Science", count: 21, color: this.generateInitialColor() },
				{ value: "Economics", count: 22, color: this.generateInitialColor() },
				{ value: "Consulting", count: 21, color: this.generateInitialColor() },
				{ value: "Design-Thinking", count: 23, color: this.generateInitialColor() },
				{ value: "Blockchain", count: 27, color: this.generateInitialColor() },
				{ value: "Full-Stack-App-Development", count: 27, color: this.generateInitialColor() },
			],
			selectedTag: "",
		};
	}

	generateInitialColor() {
		//r,g and b must all have same values to be grey
		function componentToHex(c) {
			var hex = c.toString(16);
			return hex.length === 1 ? "0" + hex : hex;
		}
		function rgbToHex(r, g, b) {
			return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
		}
		var max=180
		var min=1
		var colorVal = Math.random() * (max - min) + min
		colorVal =  Math.floor(colorVal);				
		return rgbToHex(colorVal, colorVal, colorVal);
	};

	setTagColor = (color, tagValue) => {
		if(tagValue === this.state.selectedTag){
			return "#00f2e7";
		}else{
			return color;
		}
	};

	customRenderer = (tag, size, color) => (		
		<span key={tag.value}
			style={{
				margin: '-5px 3px',
				padding: '0px 0px',
				display: 'inline-block',
				fontSize: `${size/25}em`,
				color: this.setTagColor(color, tag.value),
			}}>{tag.value}</span>
	);

	render() {
		return (
			<TagCloud minSize={18}
				maxSize={35}
				tags={this.state.data}
				cursor = "pointer"
				onClick={
					(tag) => {
						this.props.getDataFromChild(tag.value);
						this.props.expandDescription(tag.value)
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