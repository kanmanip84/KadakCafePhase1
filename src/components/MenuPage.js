import React, { useState } from "react";

const menuData = [
  {
    category: "Chai",
    image: "/image/teafoam.jpg",
    items: [
      { name: "Special Kadak", price: "$0.00" },
      { name: "Adrak Chai", price: "$0.00" },
      { name: "Elaichi Chai", price: "$0.00" },
      { name: "Gur Wali Chai", price: "$0.00" },
      { name: "Kesar Chai", price: "$0.00" },
      { name: "Rose Chai", price: "$0.00" },
    ],
  },
];

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = () => {
    setSelectedMenu(menuData[0]); // Show menu on click
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#f8f8f8",
        flexWrap: "wrap",
      }}
    >
      {/* Left Side - Tea Glass */}
      <div
        style={{
          width: selectedMenu ? "40%" : "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "width 0.3s ease-in-out",
        }}
      >
        <img
          src="/image/teaglass.png"
          alt="Tea Glass"
          style={{
            width: "80%",
            maxWidth: "250px",
            cursor: "pointer",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          onClick={handleMenuClick}
        />
      </div>

      {/* Right Side - Responsive Adjustments */}
      {selectedMenu && (
        <div
          style={{
            width: "35%", // Default size for desktop
            display: "flex",
            flexDirection: "row",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
            height: "60vh",
            minHeight: "350px",
            maxWidth: "100%",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {/* Left Side - Tea Foam Image Covers Fully */}
          <div
            style={{
              width: "50%",
              height: "100%",
              backgroundImage: `url(${selectedMenu.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Right Side - Black Background Covers Fully */}
          <div
            style={{
              width: "50%",
              backgroundColor: "#000",
              color: "#fff",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "15px",
                fontSize: "22px",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              {selectedMenu.category} Menu
            </h2>
            <hr
              style={{
                width: "70%",
                margin: "0 auto 15px auto",
                border: "1px solid #fff",
              }}
            />
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                fontSize: "16px",
                width: "100%",
              }}
            >
              {selectedMenu.items.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    width: "100%",
                  }}
                >
                  <span style={{ marginRight: "10px" }}>{item.name}</span>
                  <span style={{ marginLeft: "10px" }}>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Mobile View Adjustments */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="width: 35%"] {
              width: 90% !important; /* Expand right side fully */
              flex-direction: column;
              height: auto;
            }

            div[style*="width: 50%"] {
              width: 100% !important;
              height: auto;
            }

            div[style*="background-color: #000"] {
              padding: 15px !important;
            }

            h2 {
              font-size: 18px !important;
            }

            ul {
              font-size: 14px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MenuPage;
