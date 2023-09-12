import React from "react";
import style from "./WeatherComponent.module.css";
import "../../css/weathericons.css";

const WeatherComponent = (props) => {
  const { weatherData } = props;
  const getIconClass = (weather) =>
    weather?.map((item) => `wi-icon-${item?.id}`).join(" ");

  return (
    <div className={style.weatherContainer}>
      <div className={style.heading}>{weatherData?.name}</div>
      <div className={`wi ${getIconClass(weatherData?.weather)}`}></div>
    </div>
  );
};

export default WeatherComponent;
