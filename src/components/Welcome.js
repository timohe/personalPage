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

  componentDidMount = () => {
    fetch(`https://api.aerisapi.com/observations/zurich,ch?client_id=${accessId}&client_secret=${APIkey}`)
    .then((response) => response.json())
      .then((res) => {
        this.setState({currentWeather: res.response.ob.weatherPrimary})
      })
  }


  getWeatherIcon(weather){
    if(weather.includes("sun")){
      return "fa fa-cloud";
    }
    if(weather.includes("rain")){
      return "fa fa-umbrella";
    }
    if(weather.includes("sun")){
      return "fa fa-umbrella";
    }
    else{
      return "fa fa-cloud";
    }
  }

  formatCurrentWeather (currentWeather) {
    currentWeather= currentWeather.replace("mostly","");
    currentWeather= currentWeather.replace("partly","");
    // this.setState({weatherIcon: this.getWeatherIcon(currentWeather)})

    return currentWeather
  }

  render() {
    return (
      <div className="Welcome section">
        <h1 className="welcome-intro"> <strong>Timo Hegnauer</strong> is a <strong>student </strong>&<strong> tech-enthusiast</strong> living in {this.formatCurrentWeather(this.state.currentWeather.toLowerCase())} <i className={this.state.weatherIcon} aria-hidden="true"/> Zurich 
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