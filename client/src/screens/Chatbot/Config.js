import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Bot from "./Bot";
import Homescreen from "./Homescreen";
import CvOptions from "./CvOption";
import Homescreens from "./Homescreens";
import Homescreenss from "./Homescreenss";
import Feedback from "./Feedback";
const config = {
    botName: "Bot",
    initialMessages: [createChatBotMessage(`Hi, I am Bot. What do you want to do?`, {
        widget: "CvOptions",
      }),  
  ],
    customStyles: {
      botMessageBox: {
        backgroundColor: "#ffc404",
      },
      chatButton: {
        backgroundColor: "#ffc404",
      },
    },
    customComponents: {
      botAvatar: (props) => <Bot {...props} />,
    },
    widgets: [
      {
        widgetName: "CvOptions",
        widgetFunc: (props) => <CvOptions {...props} />,
      },
    
      {
        widgetName: "Complaint",
        widgetFunc: (props) => <Homescreen {...props} />,
      },
      {
        widgetName: "Complaintstatus",
        widgetFunc: (props) => <Homescreens {...props} />,
      },
      {
        widgetName: "Issuenotresolved",
        widgetFunc: (props) => <Homescreenss {...props} />,
      },
      {
        widgetName: "Feedback",
        widgetFunc: (props) => <Feedback {...props} />,
      },
    ],
  }
  
  export default config
