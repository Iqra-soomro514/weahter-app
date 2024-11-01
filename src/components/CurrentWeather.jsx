import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import { Box, Typography } from "@mui/material";

const CurrentWeather = (props) => {
  const { weather } = props;
  return (
    <Box className="bg-info p-3 rounded-4 w-100">
      <Typography variant="h6" className="text-center">Current Weather</Typography>
  
      <Box 
        className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mt-3" 
        style={{ maxWidth: "20%", margin: "0 auto" }}
      >
       <Box className="d-flex align-items-center my-2">
  <WbSunnyIcon fontSize="small" className="" />
  <Typography variant="body2" className="m-0">
    Temperature: {weather.temperature}°C
  </Typography>
</Box>
<Box className="d-flex align-items-center my-2">
  <WaterDropIcon fontSize="small" className="" />
  <Typography variant="body2" className="m-0">
    Humidity: {weather.humidity}%
  </Typography>
</Box>
<Box className="d-flex align-items-center my-2">
  <AirIcon fontSize="small" className="" />
  <Typography variant="body2" className="m-0">
    Wind Speed: {weather.windSpeed} km/h
  </Typography>
</Box>

      </Box>
    </Box>
  );
  
  
};

export default CurrentWeather;
