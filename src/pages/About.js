import Values from "./../components/Values";
import Skills from "./../components/Skills";
import PassionateCommunity from "./../components/PassionateCommunity";
import "../styles/AboutStyle.css"; // Import the CSS file
import Footer from "../components/Layout/Footer";
import Header from "./../components/Layout/Header";
import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start", top: -10});
    }
  }, []);

  return (
    <Box>
      <Header />

      {/* Background Section */}
      <Box
        ref={contactRef}
        className="about-background"
        sx={{
          textAlign: "center",
         
          minHeight: "50vh",
          width: "100vw",
          backgroundImage: `url("/image/aboutfoam.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          paddingTop: "80px", // Ensure there's space for header
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: "2.5rem", mb: 5, mt: -3 ,color:"white"}}>
          About Us
        </Typography>
      </Box>

      {/* Section Layout using Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Values />
        <Skills />
        <PassionateCommunity />
      </Box>

      <Footer />
    </Box>
  );
};

export default About;
