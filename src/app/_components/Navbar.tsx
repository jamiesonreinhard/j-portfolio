"use client"
import Link from 'next/link'
import NavLogo from "@/assets/jamieson-logo-nav-lg.png";
import Image from 'next/image';

const Navbar = () => {

  return (
    <nav className="flex items-center justify-center absolute top-0 left-0 w-full z-[100] py-8">
      <div className="mx-auto w-[90%] flex items-center justify-center">
        <Link href="/">
          <Image className="w-[160px]" src={NavLogo} alt="nav logo"></Image>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;