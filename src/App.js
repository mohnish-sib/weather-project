import React, { useState } from "react";
import useWeatherData from "./api/hook";
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

  const { isLoading, weatherData, forcastData } = useWeatherData(
    selectCity?.lat,
    selectCity?.lon
  );

  console.log("##", isLoading, "|", weatherData, forcastData);

  return (
    <div className="mainContainer">
      <SelectDropdown setSelectCity={setSelectCity} />
      <WeatherComponent weatherData={weatherData} isLoading={isLoading} />
    </div>
  );
}

export default App;
