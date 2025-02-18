import { Box, Grid, Typography } from "@mui/material";
import { Favorite, Visibility, Build, ShoppingCart } from "@mui/icons-material";

const features = [
  { icon: <Favorite fontSize="large" />, title: "Ambiance", text: "Chai Bar creates a warm, cozy, and inviting environment for the customers to enjoy their chai." },
  { icon: <Visibility fontSize="large" />, title: "Accessibility", text: "With 5+ outlets spread across Canada, Chai Bar ensures easy access for customers in various cities and neighborhoods" },
  { icon: <Build fontSize="large" />, title: "Customization", text: "Whether it’s adjusting the sweetness level or adding extra spices, Chai Bar in Canada is always ready to tailor their chai drink according to their liking." },
  { icon: <ShoppingCart fontSize="large" />, title: "Bulk Orders", text: "Catering to large gatherings, Chai Bar in Canada provides options for bulk ordering with 50+ servings, perfect for events and parties!" },
];

const WhyKadakCafe = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Background Video Section */}
      <Box sx={{ position: "relative", width: "100%", height: { xs: "50vh", md: "60vh" }, overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
        >
          <source src="/videos/woman-drinking-coffee.mp4" type="video/mp4" />
        </video>

        {/* Overlay Text on Video */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: "5%", md: "10%" },
            transform: "translateY(-50%)",
            textAlign: "left",
            color: "white",
            maxWidth: { xs: "90%", md: "40%" },
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
          >
            <span style={{ color: "white",fontFamily:"Teko" }}>Why</span> <br />
            <span style={{ color: "orange" ,fontFamily:"Teko"}}>Kadak Cafe?</span>
          </Typography>
        </Box>
      </Box>

      {/* Features Section (Below Video) */}
      <Box sx={{ px: { xs: 2, md: 30 }, py: 5 }}>
        

        <Grid container spacing={5} justifyContent="center">
          {features.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  p: 3,
                  borderRadius: "8px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "translateY(-5px)" },
                  
                }}
              >
                {/* Icon on Left */}
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    backgroundColor: "orange",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>

                {/* Text Box on Right */}
                <Box sx={{ flex: 1 }}>
                <Typography variant="h4" fontWeight="bold"  sx={{ mt: 5,fontFamily:"Teko" }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mt: 1,fontFamily:"Roboto" }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyKadakCafe;
