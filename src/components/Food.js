import { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


const menuData = [
 
  
  {
    category: "Snacks",
    image: "/image/samosa.jpg",
    items: [
      { name: "Samosa", price: "$0.00" },
      { name: "Aloo Patty", price: "$0.00" },
      { name: "Paneer Patty", price: "$0.00" },
      { name: "Mini Pakora", price: "$0.00" },
      { name: "Everything Bagel", price: "$0.00" },
      { name: "Jalapeno Bagel", price: "$0.00" },
    ],
  },
  {
    category: "Sides",
    image: "/image/fries.jpg",
    items: [
      { name: "Masala Fries", price: "$0.00" },
      { name: "Great Divide Fries", price: "$0.00" },
      { name: "Onion Rings", price: "$0.00" },
      { name: "Hash Browns", price: "$0.00" },
      { name: "Kulcha Poutine", price: "$0.00" },
      { name: "Masala Maggi", price: "$0.00" },
    ],
  },
  {
    category: "Chai",
    image: "/image/teaglass.png",
    items: [
      { name: "Kadak Chai", price: "$0.00" },
      { name: "Adrak Chai", price: "$0.00" },
      { name: "Elaichi Chai", price: "$0.00" },
      { name: "Gud Wali Chai", price: "$0.00" },
      { name: "Kesar Chai", price: "$0.00" },
    ],
    
  },
  {
    category: "Coffee",
    image: "/image/coffee.jpg",
    items: [
      { name: "Kadak Coffee", price: "$0.00" },
      { name: "Pistachio Latte", price: "$0.00" },
      { name: "Hazelnut Latte", price: "$0.00" },
      { name: "Hot Chocolate", price: "$0.00" },
      { name: "Cafe Mocha", price: "$0.00" },
      { name: "Cold Coffee", price: "$0.00" },
    ],
  },
  {
    category: "Milkshake",
    image: "/image/shakes.jpg",
    items: [
      { name: "Oreo Shake", price: "$0.00" },
      { name: "KitKat Shake", price: "$0.00" },
      { name: "Choco Chip Shake", price: "$0.00" },
      { name: "Chocolate Shake", price: "$0.00" },
      { name: "Vanilla Shake", price: "$0.00" },
    ],
  },
  {
    category: "Drinks",
    image: "/image/colddrinks.jpg",
    items: [
      { name: "Milk Badam", price: "$0.00" },
      { name: "Masala Lemonade", price: "$0.00" },
      { name: "Masala Jeera", price: "$0.00" },
      { name: "Doodh Soda", price: "$0.00" },
      { name: "Pop (Can/Bottle)", price: "$0.00" },
    ],
  },
  {
    category: "Street Food",
    image: "/image/K2.jpg",
    items: [
      { name: "Amritsari Kulcha", price: "$0.00" },
      { name: "Reri Kulcha", price: "$0.00" },
      { name: "Samosa Chaat", price: "$0.00" },
      { name: "Papri Chaat", price: "$0.00" },
      { name: "Aloo Tikki Chaat", price: "$0.00" },
    ],
  },
  {
    category: "Wraps",
    image: "/image/K17.jpg",
    items: [
      { name: "Chilli Franky", price: "$0.00" },
      { name: "Masala Veggie", price: "$0.00" },
      { name: "Kadak Special", price: "$0.00" },
      { name: "Bombay Franky", price: "$0.00" },
      { name: "Punjabi Special", price: "$0.00" },
    ],
  },
  {
    category: "Sandwiches",
    image: "/image/K10.jpg",
    items: [
      { name: "Grilled Cheese", price: "$0.00" },
      { name: "Bombay Sandwich", price: "$0.00" },
      { name: "Punjabi Club", price: "$0.00" },
      { name: "Kadak Special", price: "$0.00" },
      { name: "Paneer Maharaja", price: "$0.00" },
    ],
  },
  {
    category: "Burgers",
    image: "/image/K16.jpg",
    items: [
      { name: "Aloo Tikki Burger", price: "$0.00" },
      { name: "Paneer Burger", price: "$0.00" },
      { name: "Maharaja Burger", price: "$0.00" },
      { name: "Aloo Tikki Noodle Burger", price: "$0.00" },
    ],
  },
  {
    category: "Pastas",
    image: "/image/K19.jpg",
    items: [
      { name: "Alfredo Sauce", price: "$0.00" },
      { name: "Marinara Sauce", price: "$0.00" },
      { name: "Special Kadak", price: "$0.00" },
      { name: "Cheese Macaroni", price: "$0.00" },
      { name: "Pesto Sauce", price: "$0.00" },
    ],
  },
  {
  category: "Desserts",
    image: "/image/K6.jpg",
    items: [
      { name: "Pastry", price: "$0.00" },
      { name: "Waffles", price: "$0.00" },
      { name: "Cheesecake", price: "$0.00" },
      { name: "Brownies with Ice Cream", price: "$0.00" },
      { name: "Ice Cream", price: "$0.00" },
    ],
    },
    {
   
      category: "Combos",
      image: "/image/combo.png",
      items: [
        { name: "Combo 1", price: "$0.00" },
        { name: "Combo 2", price: "$0.00" },
        { name: "Combo 3", price: "$0.00" },
        { name: "Combo 4", price: "$0.00" },
        { name: "Combo 5", price: "$0.00" },
     
      ],
    },
    
];


const Food = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <Box sx={{ textAlign: "center", p: 4, background: "white" }}>
      <Grid container spacing={3} justifyContent="center" sx={{ width: "99%", margin: "0 auto" }}>
        {menuData.map((menu, index) => (
          <Grid
            item
            xs={12} sm={6} md={3} // Ensuring 4 items per row
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                cursor: "pointer",
                textAlign: "center",
                width: "100%",
                maxWidth: "280px",
                height: "380px",
                background: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={() => handleToggle(menu.category)}
            >
               {openCategory === menu.category ? (
              <Box sx={{ width: "100%", background: "#333", height: "100%", color: "white", position: "relative", p: 3 }}>
                
                {/* Brush Stroke Heading (Single-Line Fix) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-20px", // Slight overlap on top outline
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      display: "inline-block",
                      whiteSpace: "nowrap", // ✅ Keeps text in one line
                      minWidth: "max-content", // ✅ Ensures text doesn’t wrap
                      paddingX: "20px", // ✅ Adjusted padding dynamically
                      paddingY: "10px",
                      backgroundImage: "url('/image/paintbrush.png')",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      marginTop:"18px",
                      fontSize: { xs: "30px", sm: "34px", md: "36px" }, 
                      fontWeight: "bold", 
                      fontFamily: "Teko", 
                    
                    }}
                  >
                    {menu.category}
                  </Typography>
                </Box>


                   {/* White Outline Box */}
                <Box
                  sx={{
                    border: "2px solid white",
                    padding: "20px",
                    borderRadius: "5px",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    marginTop: "20px", // Adjusted to let the brush stroke overlap
                  }}
                >
                  <ul style={{ padding: "0", margin: "0" }}>
                    {menu.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          color: "white",
                          padding: "8px 0",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                          marginTop:"10px",
                          fontFamily:"Roboto",
                        }}
                      >
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            ) : (
              <img
                src={menu.image}
                alt={menu.category}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
              />
            )}
          </Box>
        </Grid>
      ))}
        </Grid>
      
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Link to="/viewmenu" style={{ textDecoration: "none" }}>
          <Button sx={{ backgroundColor: "orange", color: "black", padding: "10px 20px", fontSize: "16px" }}>View Menu</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Food;