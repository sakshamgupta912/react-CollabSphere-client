import React, { useState } from "react";
import AssignmentCards from "./AssignmentCards";
import AssignmentContent from "./AssignmentContent";
import Button from "@mui/material/Button";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import Dropzone from "react-dropzone";
import { Box } from "@mui/material";

import './Assignment.css';
import InAssignment from "./InAssignment";
import card from "@material-tailwind/react/theme/components/card";


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
const [showAddAssginmentButton,setshowAddAssginmentButton]=useState(addAssignmentButton);


  return (
    <div>
    {(pageContent)==(cards)?addAssignmentButton:(<></>)}
      
      {pageContent}

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add Assignment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            value={assignmentData.title}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={assignmentData.description}
            onChange={handleInputChange}
          />

          <TextField
            margin="dense"
            name="grade"
            label="Grade"
            type="number"
            fullWidth
            value={assignmentData.grade}
            onChange={handleInputChange}
          />
          <LocalizationProvider  dateAdapter={AdapterDayjs}>

          <MobileDateTimePicker  className='my-2'  value={assignmentData.dateAndTime}/>
          </LocalizationProvider>
     
          
          <Dropzone onDrop={handleFilesDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  style={{ padding: "20px", border: "2px dashed #aaa" }}
                >
                  <input {...getInputProps()} />
                  <p>Drag and drop files here, or click to select files</p>
                  {assignmentData.files.map((file) => (
                    <Box key={file.name}>
                      {file.name} - {file.size} bytes
                    </Box>
                  ))}
                </div>
              </section>
            )}
          </Dropzone>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} style={{color:"black"}}>
            Cancel
          </Button>
          <Button onClick={handleAddAssignment} className='DialogButtonAnnouncement'>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Assignment;
