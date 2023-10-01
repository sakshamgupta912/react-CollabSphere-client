import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"; // Import Link from React Router

import "./RoomCard.css";

export default function RoomCard(props) {
  return (
    <Link to='/InRoom' className="RoomCardLink d-flex justify-content-center" style={{width:'100%'}}>
    <Card className="my-2 RoomCard" >
      <CardMedia sx={{ height: 100 }} image={props.image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.roomName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.teacherName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="RoomCardButton">
          Remove
        </Button>
      </CardActions>
    </Card>
    </Link>
  );
}
