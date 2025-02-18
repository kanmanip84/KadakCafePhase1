import { Box, Grid, Typography ,Button} from "@mui/material";
import React from "react";
import "./../components/Menu.css";

import { Link } from "react-router-dom";

const menuData = [
  {
    category: "Chai",
    image: "/image/chai.jpg",
    items: [
      { name: "Special Kadak", price: "$0.00" },
      { name: "Adrak Chai", price: "$0.00" },
      { name: "Elaichi Chai", price: "$0.00" },
      { name: "Gur Wali Chai", price: "$0.00" },
      { name: "Kesar Chai", price: "$0.00" },
      { name: "Rose Chai", price: "$0.00" },
    ],
  },
  {
    category: "Coffee",
    image: "/image/coffee.jpg",
    items: [
      { name: "Kadak Coffee", price: "$0.00" },
      { name: "Cold Coffee", price: "$0.00" },
      { name: "Latte", price: "$0.00" },
    ],
  },
  {
    category: "Shakes",
    image: "/image/shakes.jpg",
    items: [
      { name: "Mango", price: "$0.00" },
      { name: "Watermelon", price: "$0.00" },
      { name: "Chocolate", price: "$0.00" },
      { name: "Pistachio", price: "$0.00" },
      { name: "Banana", price: "$0.00" },
      { name: "Oreo", price: "$0.00" },
    ],
  },
  {
    category: "Cold Drinks",
    image: "/image/colddrinks.jpg",
    items: [
      { name: "Masala", price: "$0.00" },
      { name: "Lassi", price: "$0.00" },
      { name: "Lemon", price: "$0.00" },
      { name: "Mango", price: "$0.00" },
      { name: "Jerra", price: "$0.00" },
    ],
  },
  {
    category: "Burgers",
    image: "/image/K16.jpg",
    items: [
      { name: "Allo Tikki", price: "$0.00" },
      { name: "Paneer", price: "$0.00" },
      { name: "Maharaja", price: "$0.00" },
      { name: "Macaroni", price: "$0.00" },
      { name: "Misc", price: "$0.00" },
    ],
  },
  {
    category: "Rolls/Sandwich",
    image: "/image/K17.jpg",
    items: [
      { name: "Paneer Kathi", price: "$0.00" },
      { name: "Shahi", price: "$0.00" },
      { name: "Allo Tikki", price: "$0.00" },
      { name: "Veggie Paneer", price: "$0.00" },
      { name: "Grilled Cheese", price: "$0.00" },
    ],
  },
  {
    category: "Street Eats",
    image: "/image/K2.jpg",
    items: [
      { name: "Fries", price: "$0.00" },
      { name: "Cheese Sticks", price: "$0.00" },
      { name: "Gol Gappe", price: "$0.00" },
      { name: "Papri Chaat", price: "$0.00" },
      { name: "Chaat", price: "$0.00" },
      { name: "Pasta", price: "$0.00" },
      { name: "Pakoras", price: "$0.00" },
    ],
  },
  {
    category: "Desserts",
    image: "/image/K6.jpg",
    items: [
      { name: "Pastry", price: "$0.00" },
      { name: "Brownie", price: "$0.00" },
      { name: "Ice Cream", price: "$0.00" },
      { name: "Waffles", price: "$0.00" },
      { name: "Cheesecake", price: "$0.00" },
    ],
  },
];

const Food = () => {
  return (
    <Box sx={{ textAlign: "center", p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {menuData.length > 0 ? (
          menuData.map((menu, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} className="menu-grid">
              <div className="menu-flip-card">
                <div className="menu-flip-card-inner">
                  
                  {/* Front Side (Main Menu Image) */}
                  <div className="menu-flip-card-front">
                    <img src={menu.image} alt={menu.category} className="menu-image" />
                  </div>

                  {/* Back Side (Submenu Items) */}
                  <div className="menu-flip-card-back">
                    <Typography variant="h6" className="menu-category">
                      {menu.category}
                    </Typography>
                    <ul className="menu-list">
                      {menu.items.map((item, idx) => (
                        <li key={idx} className="menu-item">
                        <span style={{ textAlign: "left", minWidth: "120px" }}>{item.name}</span>
                        <span className="divider">----------------</span>
                        <span style={{ textAlign: "right", minWidth: "60px" }}>{item.price}</span>
                      </li>
                      
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No menu items available</Typography>
        )}
      </Grid>
       
   
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
    <Link to="/viewmenu" style={{ textDecoration: "none" }}>
      <Button sx={{ backgroundColor: "orange", color: "black", padding: "10px 20px", fontSize: "16px" }}>
        View Menu
      </Button>
    </Link>
  </Box>
</Box>
  );
};

export default Food;
