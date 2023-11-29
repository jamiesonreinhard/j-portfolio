"use client";
import Chatbot from "./_components/Chatbot";
import ProfileImage from "@/assets/jamiesonReinhard.webp";
import Image from "next/image";

export default function Home() {
  return (
    <main id="chatbot-openai" className="w-screen bg-gray-100 shadow-md overflow-hidden flex">
      <div className="w-[90%] max-w-6xl mx-auto py-[120px] flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1 flex flex-col items-center">
          <Image src={ProfileImage} alt="Jamieson Reinhard" className="rounded-full w-32 h-32 mb-6" />
          <h2 className="text-2xl font-bold text-black mb-6">Jamieson Reinhard</h2>
          <p className="text-center text-base text-black max-w-prose mb-10">Versatile Full Stack Developer: From intricate frontend magic with React.js and Next.js to robust backend solutions in Python and Ruby on Rails, I bring your digital visions to life with a blend of technical prowess and creative finesse.</p>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6 w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Use the Chatbot</h2>
            <p className="text-base text-gray-600 mb-4">Ask questions about Jamieson, including his lifestyle and work experience...</p>
            <ul className="list-disc list-inside text-base text-gray-600">
              <li>"Can you tell me about Jamieson's experience with frontend devlopment?"</li>
              <li>"Which companies that Jamieson worked for use React.js?"</li>
              <li>"What does Jamieson like to do outside of work?"</li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Chatbot />
        </div>
      </div>
    </main>
  );
}
