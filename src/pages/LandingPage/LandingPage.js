import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../../components/LandingPageContent/Home/Home";
import Assignment from "../../components/LandingPageContent/Assignment/Assignment";
import ChatComponent from "../../components/LandingPageContent/Chat/ChatComponent";
import { MDBContainer } from 'mdb-react-ui-kit';

function LandingPage() {
  const [currentTab, setCurrentTab] = useState("home"); // Initialize the current tab

  // Function to update the currentTab state
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  let content;

  switch (currentTab) {
    case "home":
      content = <Home />;
      break;
    case "assignment":
      content = <Assignment />;
      break;
    case "chat":
      content = <ChatComponent />;
      break;
    default:
      content = <Home />; // Default to Home if currentTab doesn't match any case
  }

  return (
    <div>
    
      <NavBar currentTab={currentTab} onTabChange={handleTabChange} />
      
      {content} {/* Render the determined content */}
 
    </div>
  );
}

export default LandingPage;
