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
        <Typography 
                        variant="h6" 
                        sx={{ 
                          color: "white", 
                          fontSize: { xs: "30px", sm: "34px", md: "36px" }, 
                          fontWeight: "bold", 
                          fontFamily: "Teko", 
                          whiteSpace: "nowrap",
                          maxWidth: "100%",
                          marginTop:"100px",
                        }}
                      >
                       <span className="highlight">Kadak Cafe</span> 
                      </Typography>
        
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
