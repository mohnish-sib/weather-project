import { useEffect, useState } from "react";

const API_KEY = "e762c07fcaef8ff72a05ac484056a478";
export function useWeatherData(lat, lon) {
  const [isWeatherLoading, setIsLoading] = useState(false);
  const [weatherData, setweatherData] = useState({});

  useEffect(() => {
    if (lat && lon) {
      setIsLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
        .then((value) => value.json())
        .then((value) => {
          setweatherData(value);
          setIsLoading(false);
        });
    }
  }, [lat, lon]);

  return { isWeatherLoading, weatherData };
}
export function useForcastData(lat, lon) {
  const [isForcastLoading, setIsLoading] = useState(false);
  const [forcastData, setforcastData] = useState({});

  useEffect(() => {
    if (lat && lon) {
      setIsLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
        .then((value) => value.json())
        .then((value) => {
          setforcastData(value);
          setIsLoading(false);
        });
    }
  }, [lat, lon]);

  return { isForcastLoading, forcastData };
}
