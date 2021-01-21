import React from "react";
import BackGroundImg from "./../img/cloud.jpg";

import "./../styles/CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="img-wrap">
        <img
          src={BackGroundImg}
          alt="background"
          className="current-weather-img"
        />
      </div>
      <div className="CurrentStatus">
        <h1 id="current_city">Tokyo</h1>
        <p id="current_date">FRI Jan 1, 22:48</p>
        <span className="CurrentTemperature">18°</span>
        <div className="row">
          <div className="col-5">
            <span className="CurrentTemperatureMax">
              Max <span>20°</span>
            </span>
          </div>
          <div className="col-2 CurrentWeatherIcon">
            <i className="fas fa-cloud WeatherIconCurrent"></i>
          </div>
          <div className="col-5">
            <span className="CurrentTemperatureMin">
              Min <span>14°</span>
            </span>
          </div>
        </div>
        <span className="CurrentWeatherText">Cloudy</span>
        <div className="row">
          <div className="col-6">
            <span className="CurrentPrecipitation">
              <i className="fas fa-umbrella"></i>
              <span id="precipitation"> 70%</span>
            </span>
          </div>
          <div className="col-6">
            <span className="CurrentWind">
              <i className="fas fa-wind"></i>
              <span id="wind-speed"> 8.2m/s</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
