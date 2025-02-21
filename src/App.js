import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ViewMenu from "./pages/ViewMenu";

import OurStory from "./pages/OurStory";
import Pagenotfound from "./pages/Pagenotfound";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      
          <Route path="/viewmenu" element={<ViewMenu />} />
          <Route path="/ourstory" element={<OurStory/>} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;






