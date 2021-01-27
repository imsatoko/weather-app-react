import React, { useContext } from "react";
import { ForecastDay } from "./WeatherApp";

import "./../styles/DailyForecast.css";

export default function DailyForecast() {
  const dailyForecast = useContext(ForecastDay);

  let context = [];
  dailyForecast[0].forEach((forecast) => {
    context.push(
      <div key={forecast.dt} className="col-sm-2 FcstDay">
        <div className="row">
          <div className="col-sm-3 FcstDay01">
            <i className={forecast.icon}></i>
            <br />
          </div>
          <div className="col-sm-9 FcstDay02">
            <span className="Day">{forecast.day}</span>
            <br />
            <div className="Temperature">
              <span className="TmpHigh">{forecast.maxTemp}°</span>|
              <span className="TmpLow">{forecast.minTemp}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="DailyForecast">
      <div className="row">{context}</div>
    </div>
  );
}
