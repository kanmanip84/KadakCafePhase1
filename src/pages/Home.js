import { Box } from "@mui/material";
import Header from "./../components/Layout/Header";
import HeroSection from "./../components/HeroSection";
import WhyChaiBar from "./../components/WhyChaiBar";
import Menu from "./../components/Menu";
import Testimonials from "./../components/Testimonials";
import Footer from "./../components/Layout/Footer";
import VideoSection from "./../components/VideoSection";
import LocationPopup from "./../components/LocationPopup";

const Home = () => {
  return (
    <Box>
       <LocationPopup />
      <Header />
      <VideoSection /> {/* Background Video Section */}
      <HeroSection />
      <WhyChaiBar />
      <Menu />
      <Footer />
    </Box>
  );
};

export default Home;