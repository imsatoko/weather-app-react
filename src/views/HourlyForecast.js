import React, { useContext } from "react";
import { ForecastHour } from "./WeatherApp";

import "./../styles/HourlyForecast.css";

export default function HourlyForecast() {
  const hourlyForecast = useContext(ForecastHour);

  let context = [];
  hourlyForecast[0].forEach((forecast) => {
    context.push(
      <div key={forecast.dt} className="col-2 FcstHour">
        <span className="Hour">{forecast.hour}</span>
        <br />
        <i className={forecast.icon}></i>
        <br />
        <div className="Temperature">
          <span className="TmpHigh">{forecast.maxTemp}°</span>|
          <span className="TmpLow">{forecast.minTemp}°</span>
        </div>
      </div>
    );
  });

  return (
    <div className="HourlyForecast">
      <div className="row">{context}</div>
    </div>
  );
}
