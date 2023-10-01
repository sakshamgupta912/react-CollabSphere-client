import React, { useState } from "react";
import RoomCard from "../../RoomCard/RoomCard";
import roomCollection from "../../RoomCard/roomCollection";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import "./Home.css";

function createRoom(room) {
  return (
    <Grid
      className="d-flex justify-content-center"
      xs={12}
      sm={6}
      md={4}
      lg={3}
      key={room.id}
    >
      <RoomCard
        className=""
        roomName={room.roomName}
        teacherName={room.teacherName}
        image={room.image}
      />
    </Grid>
  );
}

function Home() {
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [classCode, setClassCode] = useState("");

  const handleOpenJoinDialog = () => {
    setJoinDialogOpen(true);
  };

  const handleCloseJoinDialog = () => {
    setJoinDialogOpen(false);
  };

  const handleJoinClass = () => {
    // Handle joining the class with the entered classCode
    console.log(`Joining class with code: ${classCode}`);
    handleCloseJoinDialog();
  };

  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [roomName, setRoomName] = useState("");

  const handleOpenCreateDialog = () => {
    setCreateDialogOpen(true);
  };

  const handleCloseCreateDialog = () => {
    setCreateDialogOpen(false);
  };

  const handleCreateRoom = () => {
    // Handle creating the room with the entered roomName
    console.log(`Creating room with name: ${roomName}`);
    handleCloseCreateDialog();
  };

  return (
    <div>
      <div
        className="floating-palet"
        style={{
          width: "150px",
          height: "60px",
          background: "transparent",
          display: "flow-root",
          position: "fixed",
          right: "20px",
          bottom: "25px",
        }}
      >
        <Button
          className="mx-1 p-1 join-room"
          style={{
            background: "white",
            borderRadius: "90%",
            boxShadow: "0px 0px 1px 1px #ff7f7f",
          }}
          onClick={handleOpenJoinDialog}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ff7f7f"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.192"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g clip-path="url(#clip0_429_11126)">
                {" "}
                <path
                  d="M9 4.00018H19V18.0002C19 19.1048 18.1046 20.0002 17 20.0002H9"
                  stroke="#ff7f7f"
                  stroke-width="1.032"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 15.0002L15 12.0002M15 12.0002L12 9.00018M15 12.0002H5"
                  stroke="#ff7f7f"
                  stroke-width="1.032"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_429_11126">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
        </Button>

        <Button
          className="mx-1 p-1 create-room"
          style={{
            background: "white",
            borderRadius: "90%",
            boxShadow: "0px 0px 1px 1px #ff7f7f",
          }}
          onClick={handleOpenCreateDialog}
        >
          <svg
            fill="#ff7f7f"
            width="50px"
            height="50px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>plus-user</title>{" "}
              <path d="M2.016 28q0 0.832 0.576 1.44t1.408 0.576h14.016v-0.352q-1.792-0.608-2.912-2.176t-1.088-3.488q0-2.016 1.184-3.584t3.072-2.112q0.384-1.216 1.216-2.176t2.016-1.504q0.512-1.376 0.512-2.624v-1.984q0-3.328-2.368-5.664t-5.632-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.912 1.504t-2.496 2.144-1.76 2.624-0.64 2.912zM18.016 24q0 0.832 0.576 1.44t1.408 0.576h2.016v1.984q0 0.864 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44v-1.984h1.984q0.832 0 1.408-0.576t0.608-1.44-0.608-1.408-1.408-0.576h-1.984v-2.016q0-0.832-0.608-1.408t-1.408-0.576-1.408 0.576-0.576 1.408v2.016h-2.016q-0.832 0-1.408 0.576t-0.576 1.408z"></path>{" "}
            </g>
          </svg>
        </Button>
      </div>

      <Grid className="m-0 w-100" container spacing={3}>
        {roomCollection.map(createRoom)}
      </Grid>

      <Dialog
        class="join-room-dialog"
        open={joinDialogOpen}
        onClose={handleCloseJoinDialog}
        style={{}}
      >
        <DialogTitle>Join Class</DialogTitle>
        <DialogContent className="dialog-content ">
          <TextField
            className="mt-3 text-field-dialog"
            label="Class Code"
            value={classCode}
            onChange={(e) => setClassCode(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            className="DialogButtonCancel"
            onClick={handleCloseJoinDialog}
          >
            Cancel
          </Button>
          <Button
            className="DialogButtonJoin"
            onClick={handleJoinClass}
            color="primary"
          >
            Join
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={createDialogOpen} onClose={handleCloseCreateDialog}>
        <DialogTitle>Create Room</DialogTitle>
        <DialogContent className="dialog-content">
          <TextField
            className="mt-3 text-field-dialog"
            label="Enter Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            className="DialogButtonCancel"
            onClick={handleCloseCreateDialog}
          >
            Cancel
          </Button>
          <Button
            className="DialogButtonCreate"
            onClick={handleCreateRoom}
           
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Home;
