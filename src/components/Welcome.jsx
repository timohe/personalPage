import React, { Component } from 'react';
import portrait from '../pictures/portrait.jpg'
// import 'font-awesome/css/font-awesome.min.css';

class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: "Not set yet",
      weatherIcon: "fa fa-sun",
    };
  }

  setWeatherAndIcon = (weather) => {
    weather = weather.toLowerCase();
    weather = weather.replace("mostly", "");
    weather = weather.replace("partly", "");
    weather = weather.replace("light rain", "rainy");
    weather = weather.replace("light", "");
    weather = weather.replace("showers", "rainy");
    // console.log(weather);
    this.setState({ currentWeather: weather })
    if (weather.includes("cloud")) {
      this.setState({ weatherIcon: "fas fa-cloud" })
    }
    else if (weather.includes("rain")) {
      this.setState({ weatherIcon: "fas fa-umbrella" })
    }
    else if (weather.includes("sun")) {
      this.setState({ weatherIcon: "fas fa-sun" })
    }
    else if (weather.includes("clear")) {
      this.setState({ weatherIcon: "fas fa-sun" })
    }
    else {
      this.setState({ weatherIcon: "fas fa-cloud" })
    }
    if(new Date().getHours()>21){
      this.setState({ weatherIcon: "fas fa-moon" })
      this.setState({ currentWeather: "nighly" })
    }
  }

  componentDidMount = () => {
    fetch(`https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?id=2657896&APPID=f96babb6d2d20b997bc81d553874add2`)
      .then((response) => response.json())
      .then((res) => {
        // console.log((new Date).getHours())
        this.setWeatherAndIcon(res.weather[0].main)
      })
  }

  render() {
    return (
      <div className="Welcome">
        <div className="Intro-Text">
          <h1 className="welcome-intro"> <strong>Timo Hegnauer</strong> is a <font color="#00f2e7">tech-enthusiast</font> <br /> living in {this.state.currentWeather} <i className={this.state.weatherIcon} aria-hidden="true" /> Zurich
            <br />
            <br />
            <a href="https://linkedin.com/in/timohegnauer" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin i-hov" /></a>
            <a href="https://github.com/timohe" target="_blank" rel="noopener noreferrer"><i className="fab fa-github i-hov" /></a>
            <a href="mailto:t.hegnauer@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" /></a>
            <br />
            <a href="https://drive.google.com/file/d/0BxzxfEo2fjpOVzkzUG03MEpLdzA/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true" /></button></a>
          </h1>
        </div>
          <img src={portrait} className="main-pic" alt="Profile" />
      </div>
    );
  }
}

export default Welcome;