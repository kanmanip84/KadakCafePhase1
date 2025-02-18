import { Box, Typography, Paper } from "@mui/material";

const testimonials = [
  "Amazing chai and cozy ambiance! Highly recommended.",
  "Great place for chai lovers, love their variety!",
];

const Testimonials = () => {
  return (
    <Box sx={{ p: 5, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold">Testimonials</Typography>
      {testimonials.map((text, index) => (
        <Paper key={index} sx={{ p: 3, m: 2, maxWidth: "500px", margin: "auto" }}>
          {text}
        </Paper>
      ))}
    </Box>
  );
};

export default Testimonials;