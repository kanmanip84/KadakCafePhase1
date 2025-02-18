import { Box, Grid, Paper, Typography } from "@mui/material";
import { Favorite, LocalCafe, People, Public } from "@mui/icons-material";

const features = [
  { icon: <Favorite fontSize="large" />, title: "Authentic Chai Experience", text: "Transport yourself to the bustling streets of India with our authentic chai blends made using ultra-premium tea leaves and spices." },
  { icon: <LocalCafe fontSize="large" />, title: "Variety of Flavors", text: "From traditional Masala cutting chai to innovative twists like Tulsi, Gur, Adrak, Kesar, and Paan, explore our wide range of flavors!" },
  { icon: <People fontSize="large" />, title: "Community Hub", text: "Chai Bar isn’t just a spot to have a hot drink, it’s an arena where friends, colleagues, and family gather to make connections." },
  { icon: <Public fontSize="large" />, title: "Sustainable Sourcing", text: "Chai Bar sources ingredients directly from trusted farmers using eco-friendly production methods for a sustainable experience." },
];

const HeroSection = () => {
  return (
    <Box sx={{ textAlign: "center", pb: 5, px: { xs: 2, sm: 4, md: 18 } }}>
      {/* Background Section */}
      <Box
        sx={{
          backgroundImage: "url('/path-to-your-background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          The Chai Bar
        </Typography>
      </Box>

      {/* Feature Boxes */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: -5 }}>
        {features.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: "10px",
                height: { xs: "350px", md: "400px" }, // Increased height
                width: { xs: "100%", md: "280px" }, // Reduced width
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid orange",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              {/* Circular Icon */}
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "-40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  border: "4px solid white",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              >
                {item.icon}
              </Box>

              {/* Title & Description */}
              <Typography variant="h4" fontWeight="bold"  sx={{ mt: 5,fontFamily:"Teko" }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, px: 2 ,fontFamily:"Roboto"}}>
                {item.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeroSection;
