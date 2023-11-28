import Image from "next/image";
import React from "react";
import BotImage from "@/assets/chatbot-icon.png";
import ChatHeader from "./ChatHeader";
import MessageWindows from ".//MessageWindow";
import InputArea from ".//InputArea";

function Chatbot() {
    return (
        <div className="w-[400px] min-h-[50vh] max-h-[70vh] flex flex-col justify-between p-8 rounded-[16px] shadow-xl bg-white">
            <ChatHeader></ChatHeader>
            <MessageWindows></MessageWindows>
            <InputArea></InputArea>
        </div>

    );
}

export default Chatbot;