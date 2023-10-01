import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardFooter,
} from "mdb-react-ui-kit";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Material from "./Material";

export default function AnnouncementCards(props) {
  return (
    <MDBCard className="my-2">
      <MDBCardHeader className="d-flex p-1 m-1 justify-content-between align-items-center">
        <div className="container d-flex align-items-center">
          <AccountCircleIcon className="mx-1" style={{ fontSize: "40px" }} />
          <MDBCardTitle className="m-0 p-0" style={{ display: "inline-block" }}>
            {props.senderName}{" "}
          </MDBCardTitle>
        </div>

        <MDBBtn
          href=""
          className="p-0 mx-2 "
          style={{
           background:'transparent',
            boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
          }}>
          <DeleteForeverOutlinedIcon  style={{color:'rgb(79, 79, 79)'  }}/>
        </MDBBtn>
      </MDBCardHeader>

      <MDBCardBody>
        <MDBCardText>{props.message}</MDBCardText>
      </MDBCardBody>


      <MDBCardFooter >
        <Material fileName="notes.pdf" />
      </MDBCardFooter>
    </MDBCard>
  );
}
