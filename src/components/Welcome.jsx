import React, { Component } from 'react';
import {accessId, APIkey} from '../apikeys.js'
import portrait from '../pictures/portrait.jpg'
import 'font-awesome/css/font-awesome.min.css';

class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: "Not set yet",
      weatherIcon: "fa fa-cloud",
    };
  }

  setWeatherAndIcon = (weather) => {
    weather= weather.toLowerCase();
    weather= weather.replace("mostly","");
    weather= weather.replace("partly","");
    this.setState({currentWeather: weather})
    if(weather.includes("cloud")){
      this.setState({weatherIcon: "fa fa-cloud"})
    }
    if(weather.includes("rain")){
      this.setState({weatherIcon: "fa fa-rain"})
    }
    if(weather.includes("sun")){
      this.setState({weatherIcon: "fa fa-sun"})
    }
    else{
      this.setState({weatherIcon: "fa fa-cloud"})
    }
  }

  componentDidMount = () => {
    fetch(`https://api.aerisapi.com/observations/zurich,ch?client_id=${accessId}&client_secret=${APIkey}`)
    .then((response) => response.json())
      .then((res) => {
        this.setWeatherAndIcon(res.response.ob.weatherPrimary)
      })
  }

  render() {
    return (
      <div className="Welcome section">
        <h1 className="welcome-intro"> <strong>Timo Hegnauer</strong> is a <font color="#00f2e7">tech-enthusiast</font> living in {this.state.currentWeather} <i className={this.state.weatherIcon} aria-hidden="true"/> Zurich 
        <br/>
        <br/>
          <a href="https://linkedin.com/in/timohegnauer" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin i-hov" aria-hidden="true"/></a>    
          <a href="https://github.com/timohe" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>  
          <a href="mailto:t.hegnauer@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
        <br/>
          <a href="https://drive.google.com/file/d/1pF67AwQH9bCm20vqytKCGxny0Dgakk0N/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>
        </h1>
        <img src={portrait} className="main-pic"/>
      </div>
    );
  }
}

export default Welcome;