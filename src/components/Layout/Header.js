import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
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
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ background: "#5D0A0B", boxShadow: "none", padding: "5px 20px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Left Section: Logo & Name */}
          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              flexDirection: "row", 
              flexGrow: 1, 
              marginLeft: 0, 
              paddingLeft: 0 
            }}
          >
            {/* Logo */}
            <img 
              src={logo} 
              alt="Kadak Cafe Logo" 
              style={{ height: "70px", marginRight: "8px" }} 
            />

            {/* Cafe Name & Subheading */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "white",
                  fontSize: { xs: "30px", sm: "30px", md: "36px" }, 
                  fontWeight: "bold",
                  fontFamily: "Teko",
                  whiteSpace: "nowrap",
                  marginTop: { xs: "6px", sm: "8px", md: "10px" }, // Adjusted for all views
                }}
              >
                Kadak Cafe
              </Typography>

              <Typography 
                variant="body2" 
                sx={{ 
                  color: "gold",
                  fontSize: { xs: "8px", sm: "9px", md: "10px" }, 
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  marginTop: { xs: "-6px", sm: "-10px", md: "-12px" }, // Moves subtitle up
                  whiteSpace: "nowrap",
                  width: "auto",
                  maxWidth: "100%",
                  marginLeft: "3px",
                }}
              >
                CHAI - MILK - SHAKES - STREET FOOD
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "20px" }}>
            {navItems.map((item) => (
              <Button 
                key={item.path} 
                sx={{ 
                  color: "white", 
                  fontSize: "20px", 
                  fontWeight: "bold", 
                  textTransform: "capitalize",
                  whiteSpace: "nowrap" ,
                  fontFamily:"Teko"
                }} 
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button (Right-Aligned) */}
          <IconButton 
            color="inherit" 
            edge="end" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
          >
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
        <List>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemText primary={item.label} sx={{ textAlign: "center", color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Space below header */}
      <Box sx={{ paddingTop: "80px" }}></Box>
    </>
  );
};

export default Header;
