import { Box, Grid, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

// Define rotation animation with increased speed
const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const PassionateCommunity = () => {
  return (
    <Box sx={{
      width: "100vw", // Full width touching left and right margins
      minHeight: "80vh", // Increased height for better layout
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      p: { xs: 3, md: 5 },
    }}>
      <Grid container spacing={4} alignItems="center">

        {/* Left Side - Animated Rotating Image */}
        <Grid item xs={12} md={6} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Box sx={{
            width: "500px", // Slightly increased size
            height: "250px",
            backgroundImage: `url("/image/passionatecommunity.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            animation: `${rotateAnimation} 6s linear infinite`, // Increased speed
          }} />
        </Grid>

        {/* Right Side - Text Content */}
        <Grid item xs={12} md={6} sx={{ textAlign: "left", pl: { md: 5 } }}>
          <Typography variant="h3" fontWeight="bold">  {/* Increased heading size */}
            <span style={{ color: "#ff5733" }}>Passionate</span> Community
          </Typography>
          <Typography variant="h6" sx={{  /* Increased paragraph size */
            maxWidth: "600px",
            mt: 2,
            color: "black",
            lineHeight: "1.8",
          }}>
            Come, let us remove all your fears and troubles with a cup of Chai from Chai Bar.  
            At Chai Bar, we are passionate about making sure you enjoy the best teas, coffees, and snacks while you enjoy your day.  
            We are here to serve you our best collation of Punjabi Chai, a wide range of snacks and soft drinks.  
            Feel the warmth of being part of a community that shares the same joy of Chai with someone, anywhere in the world.
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
};

export default PassionateCommunity;
