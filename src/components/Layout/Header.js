import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import logo from "../../images/HeaderLogo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation and scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false); // Close mobile menu
    window.scrollTo(0, 0); // Instantly move to top without animation
  };

  // Navigation Items
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/viewmenu" },
    { label: "Contact", path: "/contact" },
    { label: "Our Story", path: "/ourstory" },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#5D0A0B", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", px: { xs: 1, sm: 2, md: 4 } }}>
          
          {/* Left Section: Clickable Logo & Cafe Name */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 ,ml: { xs: 1, md: -3 }, Defaultdisplay: "block",
    marginLeft: "0"  }}>
            
            {/* Clickable Logo (Navigates to Home) */}
            <img 
              src={logo} 
              alt="Kadak Cafe Logo" 
              onClick={() => handleNavigation("/")} // Navigates to Home
              style={{ 
                height: "60px", 
                paddingLeft: "0px", 
                cursor: "pointer", // Changes cursor to indicate it's clickable
              }} 
            />

            {/* Cafe Name + Subheading in Flex Column */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", ml: { xs: 1, sm: 2 ,md:1} }}>
            <Typography 
                variant="h6" 
                onClick={() => handleNavigation("/")} // Click navigates to Home
                sx={{ 
                  color: "white", 
                  fontSize: { xs: "30px", sm: "34px", md: "36px" }, 
                  fontWeight: "bold", 
                  fontFamily: "Teko", 
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                  cursor: "pointer", // Indicates it's clickable
                  "&:hover": { color: "gold" } // Hover effect
                }}
              >
                Kadak Cafe
              </Typography>

              {/* Subheading - Adjusted Font Size for Mobile */}
              <Typography 
                variant="body2" 
                sx={{ 
                  color: "gold",
                  fontSize: { xs: "7px", sm: "9px", md: "10px" }, // Smaller on mobile
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  mt: "-6px",
                  marginLeft: "2px",
                  marginTop: "-10px"
                }}
              >
                CHAI - MILK - SHAKES - STREET FOOD
              </Typography>
            </Box>
          </Box>

          {/* Right Section: Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: { sm: "10px", md: "20px" } }}>
            {navItems.map((item) => (
              <Button 
                key={item.path} 
                sx={{ 
                  color: "white", 
                  fontSize: { sm: "16px", md: "20px" }, 
                  fontWeight: "bold", 
                  textTransform: "capitalize", 
                  fontFamily: "Teko" ,
                  cursor: "pointer", // Indicates it's clickable
                  "&:hover": { color: "gold" } // Hover effect
                }} 
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton color="inherit" edge="end" onClick={() => setMobileOpen(!mobileOpen)} sx={{ display: { xs: "block", sm: "none" }, color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer (Menu) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: "250px", background: "#222", color: "#fff" } }}
      >
        {/* Logo, Heading, and Subheading Inside Drawer */}
        <Box sx={{ textAlign: "center", padding: "20px" }}>
          <img 
            src={logo} 
            alt="Kadak Cafe Logo" 
            onClick={() => handleNavigation("/")} // Navigates to Home
            style={{ height: "60px", cursor: "pointer","&:hover": { color: "gold" } }} 
          />

          <Typography 
            variant="h6" 
            onClick={() => handleNavigation("/")} // Click navigates to Home
            sx={{ 
              color: "white", 
              fontSize: "26px", 
              fontWeight: "bold", 
              fontFamily: "Teko", 
              marginTop: "10px",
              cursor: "pointer",
              "&:hover": { color: "gold" }
            }}
          >
            Kadak Cafe
          </Typography>

          <Typography 
            variant="body2" 
            sx={{ 
              color: "gold", 
              fontSize: "9px", 
              fontFamily: "Roboto", 
              fontWeight: "bold", 
              whiteSpace: "nowrap", 
              marginTop: "-5px" 
            }}
          >
            CHAI - MILK - SHAKES - STREET FOOD
          </Typography>
        </Box>

        <Divider sx={{ background: "gold", marginBottom: "10px" }} />

        <List>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemText 
                  primary={item.label} 
                  sx={{ textAlign: "center", color: "white", fontSize: "18px" }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Removes space between header and first section */}
      <Box sx={{ height: "64px", marginBottom: "-64px" }} />
    </>
  );
};

export default Header;