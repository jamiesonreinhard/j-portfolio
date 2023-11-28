// src/page.tsx
"use client";
import Chatbot from "./_components/Chatbot";
import ProfileImage from "@/assets/jamiesonReinhard.webp";
import Image from "next/image";

export default function Home() {
  
  return (
    <main
      id="chatbot-openai"
      className="w-screen h-screen bg-white shadow-lg overflow-hidden flex bg-gray-100"
    >
      <div className="flex flex-col justify-center items-center w-1/2 p-4">
        <Image src={ProfileImage} alt="Your Name" className="rounded-full w-32 h-32 mb-4" /> {/* Update alt with your name */}
        <p className="text-center text-sm">Short bio goes here. Another sentence about you.</p> {/* Update with your bio */}
      </div>
      <div className="w-1/2 flex justify-center py-[120px]">
        <Chatbot />
      </div>
    </main>
  );
}
