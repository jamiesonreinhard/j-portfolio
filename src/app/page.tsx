// src/page.tsx
"use client";
import Chatbot from "./_components/Chatbot";

export default function Home() {
  
  return (
    <main
      id="chatbot-openai"
      className="w-screen h-screen bg-white shadow-lg overflow-hidden flex justify-center py-[120px]"
    >
      <Chatbot />
    </main>
  );
}

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
    </div>
  );
};