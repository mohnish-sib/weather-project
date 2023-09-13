import React from "react";
import style from "./WeatherComponent.module.css";
import "../../css/weathericons.css";
import "../../App.css";

const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const WeatherComponent = (props) => {
  const { weatherData, forcastData, isLoading } = props;

  const iconClassname = (weather) =>
    weather?.map((item) => `wi-icon-${item?.id}`).join(" ");

  const day = new Date().getDay();

  if (isLoading) {
    return (
      <div className={style.loader}>
        <span class="loader"></span>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={style.weatherContainer}>
      <div className={style.heading}>{weatherData?.name}</div>
      <div
        className={`wi ${iconClassname(weatherData?.weather)} ${
          style.weatherIcon
        }`}
      ></div>
      <div className={style.currectTemp}>{weatherData?.main?.temp}°</div>
      <div className={style.weekRow}>
        <div> {DAY[(day + 1) % 7]}</div>
        <div> {DAY[(day + 2) % 7]}</div>
        <div> {DAY[(day + 3) % 7]}</div>
      </div>
      <div className={style.rowClass}>
        {forcastData?.list?.slice(1, 4)?.map((item) => {
          return (
            <div
              className={`wi ${iconClassname(item?.weather)}  ${
                style.tableElement
              }`}
            ></div>
          );
        })}
      </div>
      <div className={style.rowClass}>
        {forcastData?.list?.slice(1, 4)?.map((item) => {
          return <div>{item?.main.temp_max}°</div>;
        })}
      </div>
      <div className={style.rowClass}>
        {forcastData?.list?.slice(1, 4)?.map((item) => {
          return <div>{item?.main.temp_min}°</div>;
        })}
      </div>
    </div>
  );
};

export default WeatherComponent;
