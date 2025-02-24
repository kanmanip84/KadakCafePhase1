import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import React, { useEffect, useRef } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
          paddingTop: "80px", // Ensure space for header
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 5, mt: -3, fontFamily: "Teko" }}
        >
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
            gap: "50px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Left Side: Contact Information */}
          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <Typography
              variant="h4"
              sx={{ color: "#ffcc00", fontWeight: "bold", fontSize: { xs: "2rem", md: "2.5rem" }, fontFamily: "Teko" }}
            >
              Contact My Restaurant
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", color: "black", fontSize: "18px", fontFamily: "Roboto", display: "inline" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
              beatae ducimus magni nobis culpa praesentium velit expedita quae,
              corrupti, pariatur inventore laboriosam consectetur modi impedit
              error, repudiandae obcaecati doloribus.
            </Typography>
            <br /><br />
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", color: "black", fontSize: "18px", fontFamily: "Roboto", display: "inline" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
              beatae ducimus magni nobis culpa praesentium velit expedita quae,
              corrupti, pariatur inventore laboriosam consectetur modi impedit
              error, repudiandae obcaecati doloribus.
            </Typography>
          </Box>

          {/* Right Side: Contact Details */}
          <Box sx={{ flex: 1, minWidth: "350px", maxWidth: "500px", textAlign: "center", mx: "auto" }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 1, fontFamily: "Teko" }}
            >
              Contact Details
            </Typography>
            <Box
              sx={{
                width: "100%",
                maxWidth: "300px",
                height: "4px",
                backgroundColor: "#5D0A0B",
                mx: "auto",
                mb: 2,
              }}
            />

            <TableContainer component={Paper} sx={{ mx: "auto", maxWidth: "400px" }}>
              <Table aria-label="contact table">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <LocationOnIcon sx={{ color: "red", pt: 1 }} />{" "}
                      <Typography sx={{ fontSize: "17px", fontFamily: "Roboto", display: "inline" }}>
                        6818 Ellerslie Road SW, Edmonton, Alberta, TX6 1A3
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                      <Typography sx={{ fontSize: "17px", fontFamily: "Roboto", display: "inline" }}>
                        contact@kadakcafe.ca
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CallIcon sx={{ color: "green", pt: 1 }} />{" "}
                      <Typography sx={{ fontSize: "17px", fontFamily: "Roboto", display: "inline" }}>
                        +1 403 923 8621
                      </Typography>
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
        <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 1, fontFamily: "Teko" }}>
          Our Location
        </Typography>
        <Box
          sx={{
            width: "100%",
            maxWidth: "300px",
            height: "4px",
            backgroundColor: "#5D0A0B",
            mx: "auto",
          }}
        />
      </Box>

      {/* Google Map */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          px: { xs: "5%", md: "1in" },
        }}
      >
        <iframe
          title="Google Map"
          style={{
            height: "3in",
            width: "90%",
            maxWidth: "500px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.019362098566!2d-113.55979818490746!3d53.42262817880054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ebf003f19d9%3A0x9f2417a6f8d20450!2s6818%20Ellerslie%20Rd%20SW%2C%20Edmonton%2C%20AB%20T6X%201A3%2C%20Canada!5e0!3m2!1sen!2sin!4v1707930412289!5m2!1sen!2sin"  allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>

      <br /><br /><br />
      <Footer />
    </>
  );
};

export default Contact;
