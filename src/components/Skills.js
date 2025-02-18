import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const skills = [
  { name: "Cleanliness", value: 100 },
  { name: "Presentation", value: 100 },
  { name: "Cutlery", value: 100 },
  { name: "Health", value: 100 },
];

const Skills = () => {
  const [progress, setProgress] = useState([0, 0, 0, 0]); // Start with 0%
  const ref = useRef(null);
  const animationSpeed = 50; // Control speed (higher = slower)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let currentProgress = [0, 0, 0, 0];
          let interval = setInterval(() => {
            currentProgress = currentProgress.map((val, index) =>
              val < skills[index].value ? val + 1 : val
            );
            setProgress([...currentProgress]);

            if (currentProgress.every((val, index) => val >= skills[index].value)) {
              clearInterval(interval); // Stop when all reach 100%
            }
          }, animationSpeed);
        }
      },
      { threshold: 0.7 } // Trigger when 70% of section is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: "center",
        p: { xs: 5, md: 8 },
        minHeight: "50vh", // Increase height
        width: "100vw", // Full width
        backgroundImage: `url("/image/coffeefoam.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 5, mt: -3 }}>Skills</Typography>
      
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, width: "80%" }}>
        {skills.map((skill, index) => (
          <Box key={index} sx={{ width: { xs: "90%", sm: "45%", md: "40%" } }}>
            <Typography variant="body1" fontWeight="bold">
              {skill.name} <span style={{ float: "right" }}>{progress[index]}%</span>
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={progress[index]} 
              sx={{ 
                height: 20, 
                borderRadius: 5, 
                backgroundColor: "#ccc", 
                "& .MuiLinearProgress-bar": { backgroundColor: "#ff6600", transition: "width 0.5s ease-in-out" } 
              }} 
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
