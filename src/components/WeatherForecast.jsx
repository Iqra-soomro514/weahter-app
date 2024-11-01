import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Box, Typography } from "@mui/material";

const WeatherForecast = (props) => {
  const { forecast } = props;
  return (
    <Box className="py-4">
      <Typography variant="h5">6-Day Weather Summary</Typography>
      <Box className="row">
     
        {forecast.slice(0, 3).map((dayData, index) => (
          <Box key={index} className="col mb-3 mt-4">
            <Box className="text-center bg-info py-4 rounded-4">
              <WbSunnyIcon fontSize="large" />
              <Typography className="m-0 fw-semibold py-3">
                {dayData.day}
              </Typography>
              <Typography className="m-0">{dayData.temp}°C</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="row">
  
        {forecast.slice(3, 6).map((dayData, index) => (
          <Box key={index + 3} className="col mb-3 mt-4">
            <Box className="text-center bg-info py-4 rounded-4">
              <WbSunnyIcon fontSize="large" />
              <Typography className="m-0 fw-semibold py-3">
                {dayData.day}
              </Typography>
              <Typography className="m-0">{dayData.temp}°C</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
  
};

export default WeatherForecast;
