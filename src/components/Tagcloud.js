import React from "react";
import { TagCloud } from "react-tagcloud";

function generateInitialColor () {
	var value = Math.random() * 0xFF | 0;
	var grayscale = (value << 16) | (value << 8) | value;
	var color = '#' + grayscale.toString(16);
	return color;
};

const data = [
	{ value: "Reinforced Learning", count: 25, color: generateInitialColor() },
	{ value: "Smart Contracts", count: 18, color: generateInitialColor() },
	{ value: "Web-Development", count: 38, color: generateInitialColor() },
	{ value: "Outsourcing", count: 17, color: generateInitialColor() },
	{ value: "Project-Mgmt", count: 25, color: generateInitialColor() },
	{ value: "Prototyping", count: 20, color: generateInitialColor() },
	{ value: "Hosting", count: 22, color: generateInitialColor() },
	{ value: "Machine Learning", count: 21, color: generateInitialColor() },
	{ value: "Neural Networks", count: 27, color: generateInitialColor() },
	{ value: "Deep Learning", count: 30, color: generateInitialColor() },
	{ value: "Chatbots", count: 25, color: generateInitialColor() },
	{ value: "Economics", count: 30, color: generateInitialColor() },
	{ value: "Design Thinking", count: 18, color: generateInitialColor() },
];

const customRenderer = (tag, size, color) => (
	<span key={tag.value}
		  style={{
			// animation: 'blinker 3s linear infinite',
			// animationDelay: `${Math.random() * 2}s`,
			// fontSize: `${size}em`,
			// border: `2px solid ${color}`,
			margin: '3px',
			// padding: '3px',
			// display: 'inline-block',
			size: size,
			color: color,
		  }}>{tag.value}</span>
);

export default () => (
  <TagCloud minSize={18}
            maxSize={35}
            tags={data}
            className="simple-cloud"
			onClick={tag => alert(`'${tag.value}' was selected!`)}
			// renderer={customRenderer} 
	/>
);
