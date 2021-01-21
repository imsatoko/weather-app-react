import React from "react";
import Search from "./Search";
import Error from "./Error";
import Unit from "./Unit";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

import "./../styles/WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <Search />
      <Error />
      <Unit />
      <CurrentWeather />
      <HourlyForecast />
      <hr className="Bar" />
      <DailyForecast />
    </div>
  );
}
