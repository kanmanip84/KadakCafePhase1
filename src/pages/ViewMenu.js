import React,{ useEffect } from "react";
import "./../components/ViewMenu.css"; // Ensure correct CSS file
import Footer from "../components/Layout/Footer";
import Header from "./../components/Layout/Header";

// Menu Data with Images
const menuData = [
  {
    category: "Chai",
    
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
   
    items: [
      { name: "Kadak Coffee", price: "$0.00" },
      { name: "Cold Coffee", price: "$0.00" },
      { name: "Latte", price: "$0.00" },
    ],
  },
  {
    category: "Shakes",
    
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
    
    items: [
      { name: "Pastry", price: "$0.00" },
      { name: "Brownie", price: "$0.00" },
      { name: "Ice Cream", price: "$0.00" },
      { name: "Waffles", price: "$0.00" },
      { name: "Cheesecake", price: "$0.00" },
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
        <h2 className="viewmenu-title">
          <br></br>
          <img src="/videos/black_bhaap.gif" className="bhaap" height="80px"  alt=""/>
          <span className="hide">Our</span> Menu
          <img src="/videos/black_bhaap.gif" className="bhaap hide" height="80px" alt="" />
        </h2>

        <p className="viewmenu-subtitle">
          100% <span className="highlight-text">Vegetarian</span> Food
        </p>

        <p className="viewmenu-description">
        Welcome to Chai Bar in Canada, where every dish tells a story of tradition! Dive into the 100% vegetarian Indian menu, crafted with the finest selection of popular Indian dishes, ranging from a wide variety of chai’s to Indian snacks, and desserts. Grab a bite of tasty wraps along with timeless favorites such as parantha and pakoda in NE Calgary & Edmonton, finished off with some cool shakes. Let's eat:

        </p>

        {/* Menu Grid */}
        <div className="viewmenu-grid">
          {menuData.map((section, index) => (
            <div key={index} className="viewmenu-category">
              <h2 className="viewmenu-heading">{section.category}</h2>
              <div className="viewmenu-content">
                <ul className="viewmenu-list">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="viewmenu-item">
                      <span className="viewmenu-name">{item.name}</span>
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

