import { Card, Grid, Link,IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Homescreen from "./Homescreen";
import Chatbot from "react-chatbot-kit";
import Config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./Footer.css";
import CloseIcon from '@mui/icons-material/Close';


const Footer = () => {
  const [msg, setmsg] = useState(false);
  function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("openbutton").style.display = "none";
    
    // setmsg(true);
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("openbutton").style.display = "block";
  }

  // document.addEventListener("click", function handleClickOutsideBox(event) {
  //   const box = document.getElementById("myForm");

  //   if (!box.contains(event.target) && msg) {
  //     box.style.display = "none";
  //     setmsg(false);
  //     console.log("inside event@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  //   }
  // });

  return (
    <div id="footers">
      {/* <Box pb={3}>
        <Card>
          <Copyright />
        </Card>
      </Box> */}
      <button className="open-button" id="openbutton" onClick={openForm}>
      Raise a Complaint
      </button>

      <div className="chat-popup" id="myForm">
        <Chatbot
          className="form-container"
          id="chatbot"
          config={Config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          headerText="Raise the Complaint"
        />

            {/* <button type="button" id="closebutton" onClick={closeForm}>Close</button> */}
            <IconButton color="primary" id="closebutton" onClick={closeForm}>
                <CloseIcon/>
              </IconButton>

      </div>
    </div>
  );
};

export default Footer;