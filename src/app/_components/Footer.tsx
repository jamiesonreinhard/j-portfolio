import React from "react";
import NextJs from "@/assets/next-js.svg";
import Image from "next/image";
import ChatGPT from "@/assets/chatGptLogo.png";

const Footer = () => {
    return (
        <footer className="flex items-center justify-center bg-white p-4 fixed bottom-0 left-0 w-full z-[100] gap-[100px] shadow-xl text-dark">
            {/* Copyright */}
            <div className="flex items-center gap-[8px]">
                © {new Date().getFullYear()} <span className="hidden md:block">Jamieson Reinhard</span>
            </div>
            {/* Made with statement */}
            <span className="flex items-center gap-[8px]">Built with 
                <Image src={NextJs} alt="Next JS Logo" className="w-[24px] h-[24px]" />
                <span>and</span>
                <Image src={ChatGPT} alt="Next JS Logo" className="w-[24px] h-[24px]" />
            </span>

        </footer>
    )
}

export default Footer;