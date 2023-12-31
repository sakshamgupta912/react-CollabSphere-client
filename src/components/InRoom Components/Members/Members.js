import React, { useEffect, useState } from "react";
import MemberInfoCard from "./MemberInfoCard";
import { MDBCard, MDBCardTitle } from "mdb-react-ui-kit";
import Cookies from "js-cookie";
import axios from "../../../api/axios";
import Button from "@mui/material/Button";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import UserListItem from "../../../Assets/UserListItem";
import { styled, Typography, List } from "@mui/material";

function createCard(Contact) {
  return (
    <MemberInfoCard
      type={Contact.type}
      name={Contact.name}
      email={Contact.email}
    />
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const token = Cookies.get("token");
const uid = Cookies.get("uid");

const Members = (props) => {
  const [RoomLeadersContent, setRoomLeadersContent] = useState([]);
  const [RoomMembersContent, setRoomMembersContent] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [searchUsers, setSearchUsers] = useState("");
  const [update, setUpdate] = useState(0)

  useEffect(() => {
    async function getAnnouncements() {
      const response = await axios.post(
        "/api/teams/teamMembers",
        JSON.stringify({ teamID: props?.roomId }),
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
            uid: uid,
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        setIsAdmin(response.data.isAdmin);
        setRoomLeadersContent(response.data.teamMembers.admin);
        setRoomMembersContent(response.data.teamMembers.members);
      }
    }

    getAnnouncements();
  }, [update]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get("/api/auth/searchUsers", {
        params: {
          search: searchUsers,
        },
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${token}`,
        },
      });

      if (response.status === 200) {
        // console.log(response.data);
        setUsersList(response.data);
      }
    }

    getUsers();
  }, [searchUsers]);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const addAssignmentButton = (
    <Button
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

  function createUsers(user) {
    async function handleCreateChat() {
      const response = await axios.post(
        "/api/teams/addMember",
        JSON.stringify({
          member: [user._id],
          teamID: props?.roomId
        }),
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Token ${token}`,
            uid,
          },
        }
      );
      if (response.status === 200) {
        // setSelectedChat(response.data);
        setUpdate(update+1)
        setIsDialogOpen(false);
      }
    }
    return (
      <Button onClick={handleCreateChat}>
        <UserListItem
          className=""
          id={user._id}
          email={user.email}
          name={user.name}
        />
      </Button>
    );
  }

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

      {isAdmin ? addAssignmentButton : <></>}

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add Users</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="users"
            label="Search Users:"
            type="text"
            fullWidth
            value={searchUsers}
            onChange={(e)=>setSearchUsers(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <Typography sx={{ mt: 0, mb: 0 }} variant="h6" component="div">
            Users:
          </Typography>
          <Demo>
            <List>{usersList?.map(createUsers)}</List>
          </Demo>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} style={{ color: "black" }}>
            Cancel
          </Button>
          {/* <Button
            // onClick={handleAddAssignment}
            className="DialogButtonAnnouncement"
          >
            Add
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Members;
