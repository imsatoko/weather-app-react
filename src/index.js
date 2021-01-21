import React from "react";
import ReactDOM from "react-dom";

import WeatherApp from "./views/WeatherApp";
import Footer from "./views/Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
    <Footer />
  </React.StrictMode>,
  rootElement
);
