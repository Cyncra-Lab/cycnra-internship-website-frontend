import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";

export default function NavBar(){
    return(
        <header  className="fixed top-10 left-1/2 transform -translate-x-1/2 w-[80%] flex justify-between items-center bg-[var(--header-background)] rounded-[80px] px-7 py-5 z-30">
            <nav>
                <Image src='/images/cyncra_logo.svg' width={130} height={30} alt='cyncra_logo' />
            </nav>

            <nav>
                <ul className='flex justify-between items-center gap-5 text-gray-50'>
                    <li><Link href='/aboutus'>About</Link></li>
                    <li><Link href='/cohorts'>Cohorts</Link></li>
                    <li><Link href='/contactus'>Contact Us</Link></li>
                </ul>
            </nav>

            <nav>
                <button className='bg-[var(--yellow-btn)] text-[var(--header-background)] px-[28px] py-[10px] border-none rounded-[70px] font-bold flex gap-5 items-center'>
                Apply Now
                <FaArrowRight />
                </button>
            </nav>
        </header>
    );
}