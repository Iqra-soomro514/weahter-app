import React, { useState } from "react";
import CitySearch from "./CitySearch";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import { Box, Typography } from "@mui/material";

const dummyData = {
  current: { temperature: 30, humidity: 60, windSpeed: 10 },
  forecast: [
    { day: "Monday", temp: 32 },
    { day: "Tuesday", temp: 31 },
    { day: "Wednesday", temp: 29 },
    { day: "Thursday", temp: 28 },
    { day: "Friday", temp: 27 },
    { day: "Saturday", temp: 33 },
  ],
};

const WeatherDashboard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const citySearch = (city) => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
    setCurrentWeather(dummyData.current);
    setForecast(dummyData.forecast);
  };

  return (
    <div className="bg-dark min-vh-100 d-flex justify-content-center align-items-center">
      <Box
        className="container text-center w-25 mt-5 p-4 border rounded-4 shadow-sm"
        sx={{ backgroundColor: "pink" }}
      >
        <Typography variant="h4" className="mb-4 fw-semibold">
          Weather App
        </Typography>
  
        <CitySearch onSearch={citySearch} />
  
        {currentWeather && <CurrentWeather weather={currentWeather} />}
        {forecast && <WeatherForecast forecast={forecast} />}
      </Box>
    </div>
  );
  
};

export default WeatherDashboard;
