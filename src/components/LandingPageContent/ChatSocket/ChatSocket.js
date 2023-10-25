import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Conversation,
  ConversationList,
  ConversationHeader,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import axios from "../../../api/axios";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Grid, Typography, styled, List } from "@mui/material";
import UserListItem from "../../../Assets/UserListItem";

const uid = Cookies.get("uid");
const token = Cookies.get("token");

const urlIO = "http://localhost:9000";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const ChatSocket = () => {
  const [user, setUser] = useState({
    _id: uid,
  });
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [searchUsers, setSearchUsers] = useState("");
  let socket = io(`${urlIO}`);

  useEffect(() => {
    async function getChats() {
      const response = await axios.get("/api/chat/chat", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${token}`,
          uid,
        },
      });

      if (response.status === 200) {
        setChats(response.data);
      }
    }

    getChats();
    socket.emit("setup", user);
    socket.on("connected", () => {});
    socket.on("message-received", (newMessageReceived) => {
      setMessages([...messages, newMessageReceived]);
    });
  }, []);

  useEffect(() => {
    async function getMessages() {
      const response = await axios.post(
        "/api/message/chatId",
        JSON.stringify({
          chatId: selectedChat?._id,
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
        // console.log(response.data);
        setMessages(response.data);
      }
    }

    getMessages();
  }, [selectedChat]);

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

  const returnConversation = (convo) => {
    function handleChatClick() {
      setSelectedChat({
        _id: convo._id,
        userName:
          uid == convo.users[0]._id ? convo.users[1].name : convo.users[0].name,
      });
    }

    return (
      <Conversation
        name={
          uid == convo.users[0]._id ? convo.users[1].name : convo.users[0].name
        }
        lastSenderName={convo?.latestMessage?.sender.name}
        info={convo?.latestMessage?.message}
        onClick={handleChatClick}
      >
        {/* <Avatar src={lillyIco} name="Lilly" /> */}
      </Conversation>
    );
  };

  const returnMessages = (message) => {
    return (
      <Message
        model={{
          message: message.message,
          //   sentTime: "just now",
          sender: message.sender.name,
          direction: uid === message.sender._id ? "outgoing" : "incoming",
        }}
      />
    );
  };

  function createUsers(user) {
    async function handleCreateChat() {
      const response = await axios.post(
        "/api/chat/chats",
        JSON.stringify({
          userId: user._id,
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
        setSelectedChat(response.data)
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

  const handleDialogOpen = async () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleMessageSend = async () => {
    const response = await axios.post(
      "/api/message/",
      JSON.stringify({
        message: inputMessage,
        chatId: selectedChat?._id ?? "",
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
      socket.emit("new-message", response.data);
      setMessages([...messages, response.data]);
      setInputMessage("");
    }
  };

  const addAssignmentButton = (
    <Button
      className="mx-1 p-1 add-assignment "
      style={{
        display: "flow-root",
        position: "fixed",
        left: "10px",
        bottom: "20px",
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
    <div
      style={{
        position: "relative",
        height: "94vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <div>
        <ConversationList>{chats.map(returnConversation)}</ConversationList>
      </div>
      <div style={{ width: "100%" }}>
        <MainContainer>
          {selectedChat == null ? (
            <></>
          ) : (
            <ChatContainer>
              <ConversationHeader>
                <ConversationHeader.Back
                  onClick={() => {
                    setSelectedChat(null);
                    setInputMessage("");
                    setMessages([]);
                  }}
                />
                {/* <Avatar src={joeIco} name="Joe" /> */}
                <ConversationHeader.Content
                  userName={selectedChat.userName}
                  // info="Active 10 mins ago"
                />
              </ConversationHeader>
              <MessageList>{messages.map(returnMessages)}</MessageList>
              <MessageInput
                placeholder="Type message here"
                value={inputMessage}
                onChange={(newValue) => setInputMessage(newValue)}
                onSend={handleMessageSend}
              />
            </ChatContainer>
          )}
        </MainContainer>
      </div>
      {addAssignmentButton}

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
            onChange={(e) => setSearchUsers(e.target.value)}
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
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChatSocket;
