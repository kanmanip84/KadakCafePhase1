import { Box, Typography } from "@mui/material";

const MenuSection = () => {
  return (
    <Box sx={{ textAlign: "center", py: 17, position: "relative" }}>
      {/* Background GIF with Reduced Brightness */}
      <Box
        component="img"
        src="/videos/white_bhaap.gif"
        alt="Steam Effect"
        sx={{
          width: "100%",
          height: { xs: "250px", md: "350px" },
          objectFit: "cover",
          filter: "brightness(60%)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      {/* MENU Text on Top of GIF */}
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          position: "relative",
          color: "orange",
          textShadow: "2px 2px 10px rgba(255,255,255,0.7)",
          fontSize: { xs: "2rem", md: "3rem" },
          zIndex: 1,
          fontFamily:"Teko",
        }}
      >
        MENU
      </Typography>
    </Box>
  );
};

export default MenuSection;
