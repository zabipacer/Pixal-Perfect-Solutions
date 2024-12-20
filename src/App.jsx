import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import FounderMessage from "./components/FounderMessage";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}


    <Hero/>
    <Metrics/>

      {/* Founder Message */}
     
<FounderMessage/>
      {/* Case Studies */}
      
<CaseStudies/>
      {/* Contact */}
     <Contact/>
      {/* Footer */}
  
    </div>
  );
};

export default App;
