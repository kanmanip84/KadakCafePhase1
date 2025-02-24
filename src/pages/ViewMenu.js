import React,{ useEffect } from "react";
import { Typography,Box } from "@mui/material";
import "./../components/ViewMenu.css"; // Ensure correct CSS file
import Footer from "../components/Layout/Footer";
import Header from "./../components/Layout/Header";

// Menu Data with Images
const menuData = [
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
    
];


const ViewMenu = () => {
   // Scroll to the top when the page loads
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
   }, []);
  return (
    <>
    <Header />
    <div className="menu-wrapper"style={{ backgroundImage: "url('/image/greybg.jpg')"}}>
      {/* Menu Container */}
      
        {/* Spiral Image - Placed on top */}
        <img src="/image/spairal.jpg" alt="Spiral" className="spiral" />
        <div className="menu-container">
        {/* Heading with Steam Effect */}
      
          <br></br>
          <h2 className="viewmenu-title" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <img src="/videos/black_bhaap.gif" className="bhaap" height="80px" alt="" />

  <Box sx={{ textAlign: "center", position: "relative", display: "inline-block" }}>
    <Typography
      variant="h4"
      sx={{
        fontWeight: "bold",
        fontSize: { xs: "2rem", md: "2.5rem" },
        fontFamily: "Teko",
        display: "inline-block",
      }}
    >
      Our Menu
    </Typography>
    

    {/* Underline applied only to "Our Menu" */}
    <Box
      sx={{
        width: "100%",
        height: "4px",
        backgroundColor: "#5D0A0B",
        position: "absolute",
        bottom: "-5px",
        left: "0",
      }}
    />
  </Box>

  <img src="/videos/black_bhaap.gif" className="bhaap hide" height="80px" alt="" />
</h2>

        <p className="viewmenu-subtitle">
          100% <span className="highlight-text">Vegetarian</span> Food
        </p>

        <p className="viewmenu-description">
            <Typography variant="body1" sx={{ textAlign: "justify", color: "black" ,fontSize: "18px", fontFamily: "Roboto", display: "inline" }}>
                    
        Welcome to Chai Bar in Canada, where every dish tells a story of tradition! Dive into the 100% vegetarian Indian menu, crafted with the finest selection of popular Indian dishes, ranging from a wide variety of chai’s to Indian snacks, and desserts. Grab a bite of tasty wraps along with timeless favorites such as parantha and pakoda in NE Calgary & Edmonton, finished off with some cool shakes. Let's eat:

        </Typography></p>

        {/* Menu Grid */}
        <div className="viewmenu-grid">
          {menuData.map((section, index) => (
            <div key={index} className="viewmenu-category">
              <h2 className="viewmenu-heading"><Typography 
            variant="h4"
                      sx={{  fontWeight: "bold" ,fontSize: { xs: "2rem", md: "2.5rem" },fontFamily:"Teko" }}>
                    
                    {section.category}
            </Typography></h2>
              <div className="viewmenu-content">
                <ul className="viewmenu-list">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="viewmenu-item">
                      <span className="viewmenu-name">
                          <Typography variant="body1" sx={{ textAlign: "justify", color: "black" ,fontSize: "18px", fontFamily: "Roboto", display: "inline" }}>
                                  {item.name}</Typography></span>
                      <span className="viewmenu-divider"></span>
                      <span className="viewmenu-price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ViewMenu;

