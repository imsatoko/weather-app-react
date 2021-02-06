import React, { useContext } from "react";
import { ErrorMsg } from "./WeatherApp";

import "./../styles/Error.css";

export default function Error() {
  const errorMsg = useContext(ErrorMsg);

  return (
    <div className="Error">
      <span id="error-msg">{errorMsg[0]}</span>
    </div>
  );
}
