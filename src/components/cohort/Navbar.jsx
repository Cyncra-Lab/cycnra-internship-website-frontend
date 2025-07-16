
import Image from 'next/image';
import React from 'react';

const Navbar = () => (
  <nav className="bg-[#E6FAFC] py-6 px-4">
    <div className="max-w-6xl mx-auto bg-[#02353C] text-white py-3 px-6 rounded-full flex items-center justify-between shadow-lg">
      <div className="flex-shrink-0">
        <Image width={137} height={19} src="/Group.png" alt="Logo" />
      </div>
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Cohorts</a></li>
        <li><a href="#" className="hover:underline">Contact Us</a></li>
      </ul>

      {/* Apply Now Button */}
      <button className="bg-[#FFC857] text-black px-5 py-2 rounded-full hover:bg-yellow-300 text-sm font-semibold flex items-center justify-center gap-6">
        <span>Apply Now</span>    →
      </button>
    </div>
  </nav>
);

export default Navbar;
