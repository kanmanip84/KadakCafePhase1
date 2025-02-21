import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home"; // House Icon
import { motion } from "framer-motion";

const LocationPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component={motion.div}
        initial={{ scale: 0 }} // Starts very small
        animate={{ scale: 1 }} // Expands to full size
        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth slow animation
        sx={{
          width: { xs: "80%", sm: "70%", md: "50%" }, // Make it smaller on mobile and tablet
          maxWidth: "600px", // Max limit for larger screens
          height: { xs: "auto", sm: "auto", md: "auto" }, // Adjust height for mobile view
          maxHeight: { xs: "400px", sm: "500px", md: "600px" }, // Set max height for mobile view
          bgcolor: "#d6785b",
          boxShadow: 24,
          p: 3,
          borderRadius: "15px",
          textAlign: "center",
          position: "relative", // Ensure the close button is positioned correctly within the box
          overflow: "auto", // Handle overflow in mobile view
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
            zIndex: 10, // Ensures it stays above other content
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* House Icon */}
        <HomeIcon sx={{ fontSize: 50, color: "white", mb: 1 }} />

        {/* Heading */}
        <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Teko", color: "white" }}>
          NEW LOCATION
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Teko", color: "white" }}>
          COMING SOON!
        </Typography>
        <br />

        {/* Google Maps Embed */}
        <iframe
          title="Google Maps"
          width="100%"
          height="300" // Bigger Map
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.019362098566!2d-113.55979818490746!3d53.42262817880054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ebf003f19d9%3A0x9f2417a6f8d20450!2s6818%20Ellerslie%20Rd%20SW%2C%20Edmonton%2C%20AB%20T6X%201A3%2C%20Canada!5e0!3m2!1sen!2sin!4v1707930412289!5m2!1sen!2sin"
        ></iframe>

        {/* Address */}
        <Typography variant="body1" sx={{ color: "white", mt: 2, fontSize: "18px" }}>
          6818 Ellerslie Rd SW, Edmonton, Alberta, TX6 1A3
        </Typography>
      </Box>
    </Modal>
  );
};

export default LocationPopup;
