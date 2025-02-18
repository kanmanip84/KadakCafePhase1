import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import Footer from "../components/Layout/Footer";
import Header from "./../components/Layout/Header";
import React, { useEffect, useRef } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";


  const Contact = () => {
    const contactRef = useRef(null);
  
    useEffect(() => {
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, []);

  return (
    <>
      <Header />

      {/* Background Section */}
      <Box
        ref={contactRef}

        sx={{
          textAlign: "center",
          
          minHeight: "50vh",
          width: "100vw",
          backgroundImage: `url("/image/contact.jpg")`,
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
        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: "2.5rem", mb: 5, mt: -3 }}>
          Contact
        </Typography>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          px: { xs: "5%", md: "1in" }, // Responsive padding
          width: "100%",
          py: 5,
          mt: 10,
          mb: 5,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            color: "black",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "80px",
            "@media (max-width: 900px)": {
              flexDirection: "column",
              textAlign: "center",
            },
          }}
        >
          {/* Left Side: Text Section */}
          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ffcc00" }}>
              Contact My Restaurant
            </Typography>
            <br />
            <Typography variant="body1" sx={{ textAlign: "justify", color: "black" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
              beatae ducimus magni nobis culpa praesentium velit expedita quae,
              corrupti, pariatur inventore laboriosam consectetur modi impedit
              error, repudiandae obcaecati doloribus.
            </Typography>
            <br />
            <Typography variant="body1" sx={{ textAlign: "justify", color: "black" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
              beatae ducimus magni nobis culpa praesentium velit expedita quae,
              corrupti, pariatur inventore laboriosam consectetur modi impedit
              error, repudiandae obcaecati doloribus.
            </Typography>
          </Box>

          {/* Right Side: Contact Details Table */}
          <Box sx={{ flex: 1, minWidth: "350px", maxWidth: "500px" }}>
            <TableContainer component={Paper}>
              <Table aria-label="contact table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ bgcolor: "black", color: "white", fontWeight: "bold" }}
                      align="center"
                    >
                      Contact Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000 (Toll-Free)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <MailIcon sx={{ color: "skyblue", pt: 1 }} /> contact@kadakcafe.ca
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CallIcon sx={{ color: "green", pt: 1 }} /> +1 403 923 8621
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>

      {/* Our Location Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mt: 10,
          mb: 5,
          width: "100%",
        }}
      >
        {/* Our Location Heading with Underline Matching Heading Width */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, position: "relative", mb: 1 }}
        >
          Our Location
        </Typography>
        <Box
          sx={{
            width: "100%", // Responsive width
            maxWidth: "300px", // Matches heading width
            height: "4px",
            backgroundColor: "orange",
          }}
        ></Box>
      </Box>

      {/* Google Map (Live Location) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          px: { xs: "5%", md: "1in" }, // Responsive padding
        }}
      >
        <iframe
          title="Google Map"
          style={{
            height: "4in",
            width: "100%",
            maxWidth: "100%",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.019362098566!2d-113.55979818490746!3d53.42262817880054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ebf003f19d9%3A0x9f2417a6f8d20450!2s6818%20Ellerslie%20Rd%20SW%2C%20Edmonton%2C%20AB%20T6X%201A3%2C%20Canada!5e0!3m2!1sen!2sin!4v1707930412289!5m2!1sen!2sin" 
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
      <br></br><br></br><br></br>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
