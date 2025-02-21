import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "./../components/Layout/Header";
import { Typography } from "@mui/material";

const OurStory = () => {
  return (
    <>
      <Header />
      <div style={styles.container}>
      <h2 style={styles.heading}>
      <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
          >
           
          </Typography>
        Our Story</h2>

        {/* ✅ First Row */}
        <div style={styles.firstRow}>
          <p style={styles.text}>
              <Typography variant="body1" sx={{ textAlign: "justify", color: "black" ,fontSize: "18px", fontFamily: "Roboto", display: "inline" }}>
                      
            Every time I landed in Karachi, it was a ritual. Late into the night, in the buzzing city,
            I found myself at the local chai dhabas with my cousins and friends. The hum of
            conversations, the shared laughter, and of course, the steaming cups of chai. It was home
            in every sense.
            </Typography>
          </p>
          <img src="/image/story1.jpg" alt="Story 1" style={styles.image} />
        </div>

        {/* Dotted Line 1 */}
        <img src="/image/curve1.png" alt="curve 1" style={styles.dottedLineCurve1} />

        {/* ✅ Second Row */}
        <div style={styles.secondRow}>
          <img src="/image/story2.jpg" alt="Story 2" style={styles.image} />
          <p style={styles.text}>
              <Typography variant="body1" sx={{ textAlign: "justify", color: "black" ,fontSize: "18px", fontFamily: "Roboto", display: "inline" }}>
                      
            Back in the Bay Area, after a long day, I often found myself longing for that same warm
            and inviting atmosphere—a cozy space to catch up, to reminisce, to just 'be'. That’s when
            <strong> elaichi co.</strong> began to take shape in my mind.
            </Typography>
          </p>
        </div>

        {/* Dotted Line 2 */}
        <img src="/image/curve2.png" alt="curve 2" style={styles.dottedLineCurve2} />

        {/* ✅ Third Row */}
        <div style={styles.thirdRow}>
          <img src="/image/story3.jpg" alt="Story 3" style={styles.imageStory3} />
          <p style={styles.text}>
              <Typography variant="body1" sx={{ textAlign: "justify", color: "black" ,fontSize: "18px", fontFamily: "Roboto", display: "inline" }}>
                      
            But behind every aspiration lies a deeper motive, and for me, it was bringing my
            fragmented family back together. My Baba has always been our backbone and yet he's always
            been on the move, whisked away by work most of the year. His frequent absences felt like a
            missing piece in a jigsaw puzzle. But, we held on, each of us dreaming of a day when our
            scattered pieces would come together, painting a complete picture.
            </Typography>
          </p>
        </div>

        {/* Dotted Line 3 (New Connector) */}
        <img src="/image/curve3.png" alt="curve 3" style={styles.dottedLineConnector} />

        {/* ✅ Fourth Row */}
        <div style={styles.fourthRow}>
          <p style={styles.text}>
              <Typography variant="body1" sx={{ textAlign: "justify", color: "black" ,fontSize: "18px", fontFamily: "Roboto", display: "inline" }}>
                      
            So, when Baba suggested we should start <strong>elaichi co.</strong> together, it wasn't
            just about chai or business. It was about stitching together those fragmented memories,
            about rebuilding and rejuvenating those lost times. More than just a brand, it's our
            story, our effort to bring together not just our family, but the entire community over
            shared moments and cherished cups of chai.
            </Typography>
          </p>
          <img src="/image/story4.jpg" alt="Story 4" style={styles.imageStory4} />
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    color: "#333",
    backgroundColor: "#f9f8f3",
    paddingTop: "80px", // ✅ Pushes "Our Story" below the header
  },
  heading: {
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "40px",
    fontWeight: "bold",
    fontFamily: "Teko",
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  secondRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  thirdRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    position: "relative",
  },
  fourthRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    width: "45%",
    fontSize: "16px",
    lineHeight: "1.6",
  },
  image: {
    width: "45%",
    height: "auto",
    borderRadius: "10px",
  },
  imageStory3: {
    width: "45%",
    height: "auto",
    borderRadius: "10px",
  },
  imageStory4: {
    width: "45%",
    height: "auto",
    borderRadius: "10px",
  },
  dottedLineCurve1: {
    width: "300px", // ✅ Increased size for web view
    height: "auto",
    margin: "20px auto",
    display: "block",
  },
  dottedLineCurve2: {
    width: "300px", // ✅ Increased size for web view
    height: "auto",
    margin: "20px auto",
    display: "block",
  },
  dottedLineConnector: {
    width: "300px",
    height: "auto",
    margin: "10px auto",
    display: "block",
    transform: "rotate(370deg)", // ✅ Correct pointing
  },
  "@media (max-width: 768px)": {
    dottedLineCurve1: {
      width: "200px", // ✅ Normal size in mobile
    },
    dottedLineCurve2: {
      width: "200px", // ✅ Normal size in mobile
    },
    imageStory3: {
      width: "90%",
      order: -1,
      marginBottom: "10px",
      marginTop: "-50px",
    },
    imageStory4: {
      width: "90%",
      order: -1,
      marginBottom: "10px",
    },
    dottedLineConnector: {
      width: "350px",
      transform: "rotate(370deg)",
      marginBottom: "15px",
    },
  },
};

export default OurStory;
