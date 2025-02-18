import React from "react";
import { Box, Typography } from "@mui/material";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <Box className="video-container">
      <video autoPlay muted loop playsInline className="background-video">
        <source src={`${process.env.PUBLIC_URL}/videos/hero.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box className="video-overlay"></Box>

      <Box className="overlay-heading">
         <span className="highlight">Kadak Cafe</span> 
        <Typography className="banner-subheading">
          Proud to be a completely <span className="highlight">vegetarian</span> cafe in Alberta
        </Typography>
      </Box>

      <Box className="overlay-text">
        <Typography className="txt"></Typography>
      </Box>
    </Box>
  );
};

export default VideoSection;
