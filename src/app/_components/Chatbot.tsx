import React from "react";
import ChatHeader from "./ChatHeader";
import MessageWindows from "./MessageWindow";
import InputArea from "./InputArea";

function Chatbot() {
  return (
    <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg h-[500px]">
      <ChatHeader />
      <MessageWindows />
      <InputArea />
    </div>
  );
}

export default Chatbot;
