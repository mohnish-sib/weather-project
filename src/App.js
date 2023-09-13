import React, { useState } from "react";
import { useForcastData, useWeatherData } from "./api/hook";
import "./App.css";
import SelectDropdown from "./component/selectDropDown/SelectDropDown";
import WeatherComponent from "./component/weatherComponent/WeatherComponent";

function App() {
  const [selectCity, setSelectCity] = useState({
    id: 3038789,
    nm: "Abbeville",
    lat: 50.099998,
    lon: 1.83333,
  });

  const { isWeatherLoading, weatherData } = useWeatherData(
    selectCity?.lat,
    selectCity?.lon
  );

  const { isForcastLoading, forcastData } = useForcastData(
    selectCity?.lat,
    selectCity?.lon
  );

  return (
    <div className="mainContainer">
      <SelectDropdown setSelectCity={setSelectCity} />
      <WeatherComponent
        weatherData={weatherData}
        forcastData={forcastData}
        isLoading={isWeatherLoading || isForcastLoading}
      />
    </div>
  );
}

export default App;
