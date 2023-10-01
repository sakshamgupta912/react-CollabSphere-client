import React, { useState } from "react";
import InRoomNav from "../../components/InRoom Components/InRoom Nav Bar/InRoomNav";
import Assignment from "../../components/InRoom Components/Assignment/Assignment";
import Announcement from "../../components/InRoom Components/Announcement/Announcement";

import Files from "../../components/InRoom Components/Files/Files";
import Members from "../../components/InRoom Components/Members/Members";
import { MDBContainer } from "mdb-react-ui-kit";

function InRoom() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0); // Initialize the current tab index

  // Define an array of tab items with labels and associated content components
  const tabs = [
    { label: "Announcement", content: <Announcement /> },
    { label: "Assignment", content: <Assignment /> },
    { label: "Files", content: <Files /> },
    { label: "Members", content: <Members /> },
  ];
  // XZcTFO

  // Function to update the currentTabIndex state
  const handleTabChange = (index) => {
    setCurrentTabIndex(index);
  };

  const classCode = '32XZ';
  return (
    <div>
      <div className="d-flex justify-content-center " style={{background:'white'}}><p className="m-0 p-0">Class Code: {classCode}</p></div>
      <InRoomNav tabs={tabs} currentTabIndex={currentTabIndex} onTabChange={handleTabChange} />
      <MDBContainer className="">
      {tabs[currentTabIndex].content} {/* Render the content based on the currentTabIndex */}
      </MDBContainer>
      
    </div>
  );
}

export default InRoom;
