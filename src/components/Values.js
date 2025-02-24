import { Box, Grid, Paper, Typography } from "@mui/material";
import { People, Diversity1, Lightbulb, Storefront } from "@mui/icons-material";

const values = [
  {
    icon: <People fontSize="large" color="black" />,
    title: "Building Trust",
    description: "Trust is the cornerstone of our relationship with customers. We prioritize transparency, consistency, and reliability in every interaction.",
  },
  {
    icon: <Diversity1 fontSize="large" color="black" />,
    title: "Inclusivity",
    description: "At Kadak Cafe, everyone is MOST WELCOME! We celebrate diversity and strive to create a space where individuals from all walks of life feel valued and respected.",
  },
  {
    icon: <Lightbulb fontSize="large" style={{ color: "black" }} />,
    title: "Innovation",
    description: "While rooted in traditional methods, Kadak Cafe keeps experimenting with new flavors and listens to customer feedback.",
  },
  {
    icon: <Storefront fontSize="large" style={{ color: "black" }} />,
    title: "Franchise Opportunity",
    description: "We offer a unique Kadak Cafe franchise in Canada for passionate entrepreneurs who share our vision and values.",
  },
];

const Values = () => {
  return (
    <Box sx={{ p: 7, textAlign: "center", backgroundColor: "white", width: "100%", }}>
     
      <div>
  
      <Typography variant="h6" sx={{ 
       
        mt: 2,
        color: "black",
        lineHeight: "1.8",
        fontFamily:"Roboto",
     
    }}
  >
    At &nbsp;
    <span style={{ color: "orange" }}>Kadak Cafe</span>&nbsp; we bring the bold flavors of India’s streets to your plate. From our
    &nbsp;<span style={{ color: "orange" }}>kadak chai</span>&nbsp; to spicy street food, every bite and sip is a celebration of authentic Indian taste. Fresh ingredients, traditional spices, and a whole lot of love go into every dish.
    Come, experience the magic of India’s vibrant street food culture, one kadak moment at a time.
  </Typography>
</div>

          <Grid container spacing={15} justifyContent="center" sx={{ mt: -5 }}>
              {values.map((item, index) => (
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
                    <Typography variant="h4" fontWeight="bold" sx={{ mt: 5 ,fontFamily: "Teko"}}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, px: 2,fontFamily: "Roboto" }}>
                      
                      {item.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
    </Box>
  );
};

export default Values;
