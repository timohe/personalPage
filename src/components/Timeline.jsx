import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    return (
		<div id="content">
	  
		<ul className="timeline">
		  <li className="event" data-date="2016-2018">
			<h3>Co-Founder and CTO of Flink</h3>
			<p>As the CTO of Flink, an internal insurance startup of Helvetia insurance, I was responsible for all the technical stuff.
			This meant coordnationg our 3 full-time developers, work on the architecture and develop some parts (e.g. Chatbot) on my own. <br/>
			As one of the Co-Founder, I also worked on product development, pitching and the business model.</p>
		  </li>
		  <li className="event" data-date="2015-2019">
			<h3>Masters in Informatics at University of Zurich</h3>
			<p>I am currently doing my Master of Science in Informatics. My main interest mainly lies in Blockchain technology and Artificial Intelligence.</p>    
		  </li>
			<li className="event" data-date="2015-2016">
			<h3>Design Thinking Project of University of St.Gallen and Stanford</h3>
			<p>I did a 1-year design thinking project at University of St.Gallen and Standford University,
      where a group of four run though the whole Design Thinking Macrocycle to develop a solution for an Insurance. <br/>
			At this project, I developed skills in rapid prototyping, the design thinking process, pitching and business model creation.
			</p>    
		  </li>
		  <li className="event" data-date="2014-2015">
			<h3>Consultant at Swisscom</h3>
			<p>In my 1-year intership as a IT-Consultant, I worked on different projects mainly with customers from the 
			financial industy. I learned a lot about projectmanagement, customer-interactions and improved my technical knowledge.</p>    
		  </li>
		  <li className="event" data-date="2011-2014">
			<h3>Bachelor in Economics</h3>
			<p>I did my Bachelors degree in Economics with a focus on microeconomics and game theory. 
			In my bachelors thesis I developed a mathematical model to analyse the causes of Reciprocity.</p>    
		  </li>
		</ul>
	  </div>
    );
  }
}

export default Timeline;













