import React, { useState } from "react";
import AnnouncementCards from "./AnnouncementCards";
import AnnouncementContent from "./AnnouncementContent";
import Button from "@mui/material/Button";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import './Announcement.css';
import { useDropzone } from "react-dropzone";

function createAnnouncementCards(AnnouncementCard) {
  return (
    <AnnouncementCards
      senderName={AnnouncementCard.senderName}
      message={AnnouncementCard.message}
    />
  );
}

const Announcement = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const announceMessage = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMessage('');
    setFile(null);
  };

  const handleSendMessage = () => {
    // Handle sending the message and file here
    // You can use 'message' and 'file' state values
    // Reset the form and close the dialog afterward
    setMessage('');
    setFile(null);
    setOpen(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf,.doc,.docx,.jpg,.png",
    onDrop: (acceptedFiles) => {
      // Handle the dropped file(s) here
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <div>
      <Button
        className="mx-1 p-1 announcement"
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
        onClick={announceMessage}
      >
        <CampaignRoundedIcon style={{ color: 'ff7f7f', fontSize: '40px' }} />
      </Button>

      {AnnouncementContent.map(createAnnouncementCards)}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Announcement</DialogTitle>
        <DialogContent>
          <TextField
            className="mt-2 mb-2"
            label="Create an announcement"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag and drop files here, or click to select files</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "black" }}>
            Cancel
          </Button>
          <Button className="DialogButtonAnnouncement" onClick={handleSendMessage} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Announcement;
