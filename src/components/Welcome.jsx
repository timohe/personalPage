import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSun,
	faCloud,
	faUmbrella,
	faSnowflake,
	faBolt,
	faMoon,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import portrait from "../pictures/portrait.png";

const getWeatherIcon = (weather, hour) => {
	if (hour > 21) {
		return faMoon;
	}
	
	const weatherLower = weather.toLowerCase();
	if (weatherLower.includes("cloud")) return faCloud;
	if (weatherLower.includes("rain") || weatherLower.includes("shower")) return faUmbrella;
	if (weatherLower.includes("sun") || weatherLower.includes("clear")) return faSun;
	if (weatherLower.includes("snow")) return faSnowflake;
	if (weatherLower.includes("storm")) return faBolt;
	return faCloud;
};

const getWeatherText = (weather, hour) => {
	if (hour > 21) {
		return "nightly";
	}
	
	const weatherLower = weather.toLowerCase();
	if (weatherLower.includes("cloud")) return "cloudy";
	if (weatherLower.includes("rain") || weatherLower.includes("shower")) return "rainy";
	if (weatherLower.includes("sun")) return "sunny";
	if (weatherLower.includes("clear")) return "clear";
	if (weatherLower.includes("snow")) return "snowy";
	if (weatherLower.includes("storm")) return "stormy";
	return "cloudy";
};

function Welcome() {
	const [currentWeather, setCurrentWeather] = useState("Not set yet");
	const [weatherIcon, setWeatherIcon] = useState(faSun);

	useEffect(() => {
		const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY || "f96babb6d2d20b997bc81d553874add2";
		
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?id=2657896&APPID=${apiKey}`,
		)
			.then((response) => response.json())
			.then((res) => {
				if (res.weather && res.weather[0]) {
					const hour = new Date().getHours();
					const weather = res.weather[0].main;
					setWeatherIcon(getWeatherIcon(weather, hour));
					setCurrentWeather(getWeatherText(weather, hour));
				}
			})
			.catch((error) => {
				console.error("Error fetching weather:", error);
			});
	}, []);

	return (
		<div className="Welcome">
			<div className="Intro-Text">
				<h1 className="welcome-intro">
					{" "}
					<strong>Timo Hegnauer</strong> is a{" "}
					<span style={{ color: "#00f2e7" }}>product manager</span> <br /> living in{" "}
					{currentWeather}{" "}
					<FontAwesomeIcon icon={weatherIcon} aria-hidden="true" /> Zurich
					<br />
					<br />
					<a
						href="https://linkedin.com/in/timohegnauer"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} className="i-hov" />
					</a>
					<a
						href="https://github.com/timohe"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} className="i-hov" />
					</a>
					<a
						href="mailto:t.hegnauer@gmail.com?Subject=Hello%20there!"
						target="_top"
					>
						<FontAwesomeIcon icon={faEnvelope} className="i-hov" />
					</a>
					<br />
					<a
						href="https://kdrive.infomaniak.com/app/share/581603/ef67e05e-8561-41e1-aacb-4ae700ea385c"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button type="button" className="button resume-button">
							Resume <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
						</button>
					</a>
				</h1>
			</div>
			<img src={portrait} className="main-pic" alt="Profile" />
		</div>
	);
}

export default Welcome;
