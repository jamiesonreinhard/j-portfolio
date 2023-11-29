"use client"
import Link from 'next/link'
import MobileNav from './MobileNavbar';
import NavLogo from "@/assets/jamieson-logo-nav-lg.png";
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-lg fixed top-0 left-0 w-full z-[100] h-[80px]">
      <div className="mx-auto w-[90%] flex items-center justify-between">
        <div className='block lg:hidden'>
          <MobileNav />
        </div>
        <div className="hidden lg:flex space-x-4">
          {links?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black font-bold hover:text-gray-900 transition duration-150 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/">
          <Image className="w-[160px]" src={NavLogo} alt="nav logo"></Image>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;