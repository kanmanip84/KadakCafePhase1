import React, { useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import { Button, Form, Container } from "react-bootstrap";
import backgroundImage  from "../images/background.png"; 

const UploadVideo = () => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!isAdmin) {
      alert("Access denied! Incorrect password.");
      return;
    }

    if (!file) {
      alert("Please select a video file");
      return;
    }

    const formData = new FormData();
    formData.append("eventName", eventName);
    formData.append("description", description);
    formData.append("file", file);

    try {
      await axios.post("http://localhost:9191/videos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Video uploaded successfully!");
    } catch (error) {
      console.error("Error uploading video", error);
    }
  };

  const checkPassword = () => {
    if (password === "admin123") {
      setIsAdmin(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <Layout backgroundImage={backgroundImage}>
      
      <Container style={{ maxWidth: "1200px" }}>

        <br />
        <h2>Upload Video</h2>
        <br />

        {!isAdmin ? (
          // Show admin login first
          <div style={{ height: '410px' }}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br></br>
            <br></br>
           

            

            <Button 
  variant="primary" 
  onClick={checkPassword} 
  style={{ backgroundColor: "#5E0605", color: "white", border: "none" }}
>
              Submit
            </Button>
          </div>
        ) : (
          // Show the upload form after admin logs in
          <Form style={{ width: "600px", padding: "36px" }}>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event name"
                onChange={(e) => setEventName(e.target.value)}
                style={{ width: "300px" }} // Adjust width as needed
              />
              <br />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: "300px" }}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="file">
              <Form.Label>Choose File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange}  style={{ width: "300px" }}/>
              <br />
            </Form.Group>
            <br />
            <Button variant="primary" onClick={handleUpload}>
              Upload Video
            </Button>
            
            
          </Form>
          
        )}
      </Container>
     
     
    </Layout>
    
  );
};

export default UploadVideo;
