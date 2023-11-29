"use client";
import Chatbot from "./_components/Chatbot";
import ProfileImage from "@/assets/jamiesonReinhard.webp";
import LinkedIn from "@/assets/linkedinIcon.svg";
import GitHub from "@/assets/github.svg";
import Resume from "@/assets/resume-dark.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const downloadResume = () => {

  }

  return (
    <main id="chatbot-openai" className="w-screen overflow-hidden flex relative">
      <div className="w-[90%] max-w-6xl mx-auto py-[140px] flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        <div className="flex-1 flex flex-col items-center">
          <Image src={ProfileImage} alt="Jamieson Reinhard" className="rounded-full w-32 h-32 mb-6 shadow-xl" />
          <div className="mb-6 flex items-center gap-[12px] text-dark">
            <h2 className="text-2xl font-bold">Jamieson Reinhard</h2>
            <span>|</span>
            <span className="flex items-center gap-[12px]">
              <Link href={"https://linkedin.com/in/jamiesonreinhard"} target="_blank">
                <Image src={LinkedIn} alt="LinkedIn Icon" className="w-[24px] h-[24px]" />
              </Link>
              <Link href={"https://github.com/jamiesonreinhard"} target="_blank">
                <Image src={GitHub} alt="GitHub Icon" className="w-[24px] h-[24px]" />
              </Link>
              <a href="jamieson-resume.pdf" download="JamiesonReinhard.pdf">
                <Image src={Resume} alt="Resume Icon" className="w-[24px] h-[24px]" />
              </a>

            </span>
          </div>
          <p className="text-center text-[14px] text-black max-w-prose mb-10">Versatile Full Stack Developer: From intricate frontend magic with React.js and Next.js to robust backend solutions in Python and Ruby on Rails, I bring your digital visions to life with a blend of technical prowess and creative finesse.</p>
          <div className="bg-dark text-white border border-gray-200 rounded-lg shadow p-6 w-full">
            <h2 className="text-xl font-semibold mb-4">How to Use the AI Chatbot</h2>
            <p className="text-[14px] mb-4">Ask questions about Jamieson, including his lifestyle and work experience...</p>
            <ul className="list-disc list-inside text-[14px]">
              <li>"Can you tell me about Jamieson's experience with frontend devlopment?"</li>
              <li>"What do Jamieson's previous co-workers say about his work ethic?"</li>
              <li>"How many times could Jamieson have sailed around the world in the time he spent studying Finance?"</li>
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
