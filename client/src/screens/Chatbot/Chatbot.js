import React from "react";
import Chatbot from "react-chatbot-kit";
import Config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./Chatbot.css";

export default function Chatbots() {

  return (
<div>
 {/* <Navbar/> 
    <div className="app">
      <div className="container">
        <div className=" mx-auto col-ml-6 col-sm-8 col-lg-4 cpl-xl-3 my-5 r1"> */}
          <Chatbot
            config={Config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
    //      </div>
    
    // </div>
    // </div>
  );
}