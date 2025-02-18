import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import "./VideoSlideshow.css";

const VideoSlideshow = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:9191/videos") // Fetch videos from backend
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  // Function to show previous video
  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : videos.length - 1));
  };

  // Function to show next video
  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex < videos.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="video-banner-container">
      {/* Left Arrow */}
      {videos.length > 1 && (
        <button className="scroll-button left" onClick={prevVideo}>
          <FaChevronLeft />
        </button>
      )}

      {/* Video Display */}
      <div className="video-display">
        {videos.length > 0 && (
          <video key={currentIndex} ref={videoRef} width="280" height="180" controls>
            <source src={`http://localhost:9191${videos[currentIndex].videoUrl}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Right Arrow */}
      {videos.length > 1 && (
        <button className="scroll-button right" onClick={nextVideo}>
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default VideoSlideshow;
