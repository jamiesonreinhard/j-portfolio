import Image from "next/image";
import React from "react";
import BotImage from "@/assets/jr-icon.png";
import CopyIcon from "@/assets/copy.svg";
import TrashIcon from "@/assets/trash.svg";

const ChatHeader = () => {
  const clearChat = () => {
    localStorage.removeItem("runId");
    localStorage.removeItem("threadId");
    window.location.reload();
  }

  return (
    <div className="sticky top-0 w-full bg-white border-b border-gray-200">
      <div className="flex justify-between items-center py-1 mb-4 w-full">
        <div className="flex items-center  px-2 gap-2 pt-2">
          <Image className="w-10 h-10" src={BotImage} alt="Chatbot"></Image>
          <span className="text-lg font-bold text-zinc-700">
            {process.env.NEXT_PUBLIC_CHATBOT_NAME}
          </span>
        </div>
        <div className="flex items-center gap-[12px]">
          {/* <button className="">
            <Image className="w-6 h-6" src={CopyIcon} alt="Chatbot"></Image>
          </button> */}
          <button onClick={clearChat} className="">
            <Image className="w-6 h-6" src={TrashIcon} alt="Chatbot"></Image>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;