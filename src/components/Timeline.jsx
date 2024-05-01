import React, { Component } from 'react';

class Timeline extends Component {
	render() {
		return (
			<div id="content">
				<ul className="timeline">
					<li className="event" data-date="2023-today">
						<h3>Head of Trading at Neon</h3>
						<p>As the architect behind the security rading feature at Neon, I assumed the position of Head of Trading, overseeing the security trading functionalities, forging strategic partnerships, and driving further advancements in our platform's development. </p>
					</li>
					<li className="event" data-date="2021-2023">
						<h3>Senior Product Manager at Neon</h3>
						<p>As neon started to build up a product team, I transitioned to a more product focused role, responsible for the roadmap and delivery of one of two tech teams.</p>
					</li>
					<li className="event" data-date="2019-2021">
						<h3>Senior Product Owner at Neon</h3>
						<p>I joint the the Swiss banking startup <a href="https://www.neon-free.ch">Neon</a> in an early stage. I was product owner for the sole tech team, responsible for concepts for new features and their delivery.</p>
					</li>
					<li className="event" data-date="2016-2019">
						<h3>Co-Founder and CTO of Flink</h3>
						<p>As a co-founder and CTO of Flink, a <a href="https://www.helvetia.com">Helvetia</a> owned insurance startup, I was in charge of the technical product, developed the business model and successfully pitched for over 1mio CHF.<br />
				After 2 years it became clear that Flink won't be continued as a standalone startup, so I left as a CTO and continued to support the transition period as a freelance consultant at <a href="https://helvetia-consulting.ch/">Helvetia Consulting</a></p>
					</li>
					<li className="event" data-date="2015-2019">
						<h3>Masters in Informatics at University of Zurich</h3>
						<p>I graduated with summa cum laude in 2019 with a focus on machine learning and Blockchains.<br />
				My masters thesis was about Blockchain Interoperability. I published a related <a href="https://ieeexplore.ieee.org/document/8990860">paper in the 2019 IEEE Conference on Local Computer Networks</a>
						</p>
					</li>
					<li className="event" data-date="2015-2016">
						<h3>Design Thinking Project of University of St.Gallen and Stanford</h3>
						<p>I completed a 1 year long design thinking project at University of St.Gallen and Stanford University.<br />
			I developed skills in rapid prototyping, the design thinking process, pitching and business model creation. I layed the foundation for founding the startup Flink.
			</p>
					</li>
					<li className="event" data-date="2014-2015">
						<h3>Consultant at Swisscom</h3>
						<p>In my 1-year intership as a IT-Consultant, I worked mainly on technical projects in the financial industry.<br />
			It motivated me to shift my studies from Economics to Informatics.
			</p>
					</li>
					<li className="event" data-date="2011-2014">
						<h3>Bachelor in Economics</h3>
						<p>I did my Bachelors degree in Economics with a focus on microeconomics and game theory.
			In my bachelors thesis I developed a mathematical model to analyse the causes of reciprocity.</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default Timeline;













