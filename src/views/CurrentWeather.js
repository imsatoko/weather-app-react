import React, { useContext } from "react";
import { CurrentTime } from "./../modules/Date.js";
import { WeatherToday } from "./WeatherApp";
import { BackgroundImg } from "./WeatherApp";
import ReactAnimatedWeather from "react-animated-weather";

import "./../styles/CurrentWeather.css";

export default function CurrentWeather() {
  const currentWeather = useContext(WeatherToday);
  const weatherImg = useContext(BackgroundImg);

  let currentTime = CurrentTime();

  return (
    <div className="CurrentWeather">
      <div className="img-wrap">
        <img
          src={weatherImg[0]}
          alt="background"
          className="current-weather-img"
        />
      </div>
      <div className="CurrentStatus">
        <h1 id="current_city">{currentWeather[0].name}</h1>
        <p id="current_date">{currentTime}</p>
        <span className="CurrentTemperature">{currentWeather[0].temp}°</span>
        <div className="row">
          <div className="col-5">
            <span className="CurrentTemperatureMax">
              Max <span>{currentWeather[0].maxTemp}°</span>
            </span>
          </div>
          <div className="col-2 CurrentWeatherIcon">
            <ReactAnimatedWeather icon={currentWeather[0].icon} />
          </div>
          <div className="col-5">
            <span className="CurrentTemperatureMin">
              Min <span>{currentWeather[0].minTemp}°</span>
            </span>
          </div>
        </div>
        <span className="CurrentWeatherText">
          {currentWeather[0].description}
        </span>
        <div className="row">
          <div className="col-6">
            <span className="CurrentPrecipitation">
              <i className="fas fa-umbrella"></i>
              <span id="precipitation">
                &nbsp;
                {currentWeather[0].precipitation}%
              </span>
            </span>
          </div>
          <div className="col-6">
            <span className="CurrentWind">
              <i className="fas fa-wind"></i>
              <span id="wind-speed">&nbsp;{currentWeather[0].wind}m/s</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
