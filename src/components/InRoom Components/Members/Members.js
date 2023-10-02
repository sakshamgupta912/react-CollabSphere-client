import React from "react";
import MemberInfoCard from "./MemberInfoCard";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink,
  MDBCardFooter,
} from "mdb-react-ui-kit";

import RoomLeadersContent from "./RoomLeadersContent";
import RoomMembersContent from "./RoomMembersContent";

function createCard(Contact)
{
  return(
    <MemberInfoCard 
      type={Contact.type}
      name={Contact.name}
      email={Contact.email}
    />
  );
}

const Members = () => {
  return (
    <div>
      <MDBCard className="m-2 p-2">
        <div className="d-flex justify-content-center">
          <MDBCardTitle>Room Leaders</MDBCardTitle>
        </div>
        {RoomLeadersContent.map(createCard)}
      </MDBCard>

      <MDBCard className="m-2 p-2">
        <div className="d-flex justify-content-center">
          <MDBCardTitle>Members</MDBCardTitle>
        </div>
        {RoomMembersContent.map(createCard)}
      </MDBCard>
    </div>
  );
};

export default Members;
