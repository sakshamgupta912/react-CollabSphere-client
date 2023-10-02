import React from "react";
import { useState } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import "./Assignment.css";
import Material from "./Material";
import Dropzone from "react-dropzone";
import { Box } from "@mui/material";

import SubmittedBy from "./SubmittedBy";
import NotSubmittedBy from "./NotSubmittedBy";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink,
  MDBCardFooter,
} from "mdb-react-ui-kit";

const InAssignment = (props) => {
  const handleFilesDrop = (files) => {
    setAssignmentData({
      ...assignmentData,
      files: files,
    });
  };
  const [assignmentData, setAssignmentData] = useState({
    files: [],
  });


  const [studentList,setStudentList] = useState(<></>);

  
  return (
    <div>
      <MDBContainer>
        <Button
          className="DialogButtonAnnouncement p-0 m-0 justify-content-start "
          onClick={props.setCardsPage}
          style={{ minWidth: "0" }}
        >
          <ArrowBackIcon />
        </Button>

        <MDBCard className="my-2">
          <MDBCardBody>
            <div className="d-flex justify-content-between align-items-center">
              <MDBCardTitle style={{ fontSize: "1.7em" }}>
                {props.AssignmentTitle}
              </MDBCardTitle>

              <MDBCardSubTitle>Graded out of {props.grade}</MDBCardSubTitle>
            </div>

            <MDBCardSubTitle style={{ fontSize: ".8em", fontStyle: "oblique" }}>
              Due on {props.dueDate} at {props.dueTime}
            </MDBCardSubTitle>
            <br></br>
            <MDBCardText>{props.desc}</MDBCardText>
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
          </MDBCardBody>
          <MDBCardFooter>
          <MDBCardSubTitle>Material</MDBCardSubTitle>
            <Material fileName="notes.pdf" />
            <Material fileName="book.pdf" />
          </MDBCardFooter>
        </MDBCard>

        <MDBCard className="my-2">
          <div className="d-flex justify-content-center">
            <Button className="DialogButtonAnnouncement " onClick={()=>{setStudentList(<SubmittedBy/>)}}>
                      Submitted BY
            </Button>
            <Button className="DialogButtonAnnouncement " onClick={()=>{setStudentList(<NotSubmittedBy/>)}}>
                      Not Submitted BY
            </Button>
          </div>
          {studentList}
        </MDBCard>

        


      </MDBContainer>
    </div>
  );
};

export default InAssignment;
