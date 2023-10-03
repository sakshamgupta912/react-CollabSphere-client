import React, { useState } from "react";
import AssignmentCards from "./AssignmentCards";
import AssignmentContent from "./AssignmentContent";
import Button from "@mui/material/Button";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";



import './Assignment.css';
import InAssignment from "./InAssignment";



const Assignment = () => {
 
  function createAssignmentCard(AssignmentCard) {
    
 
    const setInAssignmentPage = () => {
      setPageContent(<InAssignment AssignmentTitle={AssignmentCard.AssignmentTitle}
        dueDate={AssignmentCard.dueDate}
        dueTime={AssignmentCard.dueTime}  
        setCardsPage={setCardsPage} 
        grade={AssignmentCard.grade} 
        desc={AssignmentCard.desc}
        
        />);
    };

    var randomNumber = Math.floor(Math.random() * 4);
    return (
      
      <AssignmentCards
      
        key={AssignmentCard.id}
        AssignmentTitle={AssignmentCard.AssignmentTitle}
        dueDate={AssignmentCard.dueDate}
        dueTime={AssignmentCard.dueTime}
        setInAssignmentPage={setInAssignmentPage}
        randomNumber={randomNumber}
      />
    );
  }
 
  const setCardsPage = () => {
    setPageContent(cards);
  };
  
   
  const cards = AssignmentContent.map(createAssignmentCard);

 
  
  const [pageContent, setPageContent] = useState(cards);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [assignmentData, setAssignmentData] = useState({
    title: "",
    description: "",
    dateAndTime:null,
    grade: "",
    files: [],
  });

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignmentData({
      ...assignmentData,
      [name]: value,
    });
  };

  const handleDueDateChange = (date) => {
    setAssignmentData({
      ...assignmentData,
      dueDate: date,
    });
  };

  const handleDueTimeChange = (time) => {
    setAssignmentData({
      ...assignmentData,
      dueTime: time,
    });
  };

  const handleFilesDrop = (files) => {
    setAssignmentData({
      ...assignmentData,
      files: files,
    });
  };

  const handleAddAssignment = () => {
    // Handle adding the assignment data to your content or API here
    console.log("Assignment data:", assignmentData);
    // Clear the form and close the dialog
    setAssignmentData({
      title: "",
      description: "",
      dateAndTime: null,
      grade: "",
      files: [],
    });
    setIsDialogOpen(false);
  };

  const addAssignmentButton =(<Button
    className="mx-1 p-1 add-assignment "
    style={{
      display: "flow-root",
      position: "fixed",
      right: "20px",
      bottom: "25px",
      zIndex: "3",
      background: "white",
      borderRadius: "90%",
      height: "60px",
      width: "60px",
      boxShadow: "0px 0px 1px 1px #ff7f7f",
    }}
    onClick={handleDialogOpen}
  >
    <AddCircleOutlinedIcon style={{ color: "ff7f7f", fontSize: "50px" }} />
  </Button>
);



  return (
    <div className="m-3">
   
      
      {pageContent}

    </div>
  );
};

export default Assignment;
