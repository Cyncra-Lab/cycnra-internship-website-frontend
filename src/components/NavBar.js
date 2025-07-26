"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
import { HiX } from "react-icons/hi";
import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="fixed top-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1200px] flex justify-between items-center bg-[var(--header-background)] rounded-[80px] px-7 py-5 z-30">
      <nav>
       <Link href="/"><Image src='/images/cyncra_logo.svg' width={130} height={30} alt='cyncra_logo' /></Link> 
      </nav>

      {/* Desktop Links */}
      <nav className="hidden md:flex justify-between items-center gap-8 text-gray-50">
        <Link href='/aboutus'>About</Link>
        <Link href='/cohorts'>Cohorts</Link>
        <Link href='/contactus'>Contact Us</Link>
      </nav>

      <nav className="hidden md:block">
        <button className='bg-[var(--yellow-btn)] text-[var(--header-background)] px-[28px] py-[10px] border-none rounded-[70px] font-bold flex gap-5 items-center'>
          Apply Now
          <FaArrowRight />
        </button>
      </nav>

      {/* Menu Icon */}
      <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX /> : <RiMenu5Fill />}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full mt-4 right-0 w-full bg-[var(--header-background)] rounded-2xl py-6 px-7 flex flex-col gap-4 text-white md:hidden shadow-lg">
          <Link href='/aboutus' onClick={() => setMenuOpen(false)}>About</Link>
          <Link href='/cohorts' onClick={() => setMenuOpen(false)}>Cohorts</Link>
          <Link href='/contactus' onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <button className='bg-[var(--yellow-btn)] text-[var(--header-background)] px-5 py-2 rounded-[60px] font-bold flex justify-center items-center gap-3'>
            Apply Now
            <FaArrowRight />
          </button>
        </div>
      )}
    </header>
  );
}
