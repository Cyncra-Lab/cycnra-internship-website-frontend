'use client';
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import NavBar from "../../components/NavBar";

export default function ContactUs() {
  return (
    <section className="relative w-full min-h-screen bg-[url('/images/hero_background.png')] bg-cover bg-center overflow-hidden flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-6">

      {/* Mobile NavBar */}
      <div className="block lg:hidden absolute top-4 left-4 z-50">
        <NavBar />
      </div>

      {/* Desktop Back Button */}
      <div className="hidden lg:block absolute top-6 left-10 z-50">
        <Link
          href="/"
          className="bg-transparent text-[var(--header-background)] font-bold flex justify-center items-center gap-2"
        >
          <IoIosArrowBack />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1440px] gap-10">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 mt-20 pt-20 lg:mt-10 lg:pt-0">
          <button className="bg-[var(--header-background)] flex items-center gap-2 py-4 px-6 rounded-lg text-[var(--text-white)] text-sm sm:text-base">
            <Image src="/icons/arrow_down.svg" width={24} height={24} alt="arrow-down" />
            Contact Us
          </button>

          <h2 className="text-[var(--header-background)] text-3xl sm:text-4xl lg:text-5xl font-bold pt-4">
            We're Here to Help
          </h2>

          <p className="text-[var(--header-background)] text-base sm:text-lg opacity-70 pt-4">
            Have questions about our internship program? Reach out and we'll get back to you. Need help with application or want to know more? We'd love to hear from you!
          </p>

          <div className="pt-6 flex justify-center items-center">
            <Image
              src="/images/contact_image.png"
              width={500}
              height={400}
              alt="contact_image"
              className="object-contain w-full max-w-md"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 bg-[var(--header-background)] rounded-2xl px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 text-[var(--text-white)] space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Contact Information</h2>
            <p className="text-base sm:text-lg mt-1">Get in touch with us.</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full sm:w-1/2 mb-10 lg:mb-0">
                <label htmlFor="first-name" className="mb-1">First Name</label>
                <input type="text" id="first-name" className="bg-transparent border-b border-white py-2 outline-none" />
              </div>
              <div className="flex flex-col w-full sm:w-1/2 mb-10 lg:mb-0">
                <label htmlFor="last-name" className="mb-1">Last Name</label>
                <input type="text" id="last-name" className="bg-transparent border-b border-white py-2 outline-none" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full sm:w-1/2 mb-10 lg:mb-0">
                <label htmlFor="email" className="mb-1">Email</label>
                <input type="email" id="email" className="bg-transparent border-b border-white py-2 outline-none" />
              </div>
              <div className="flex flex-col w-full sm:w-1/2 mb-10 lg:mb-0">
                <label htmlFor="phone-number" className="mb-1">Phone Number</label>
                <input type="tel" id="phone-number" className="bg-transparent border-b border-white py-2 outline-none" />
              </div>
            </div>

            <div className="mb-10 lg:mb-0">
              <p className="text-base sm:text-lg font-bold mb-5 lg:mb-3">Select Subject</p>
              <div className="flex flex-col md:flex-row lg:flex-row flex-wrap justify-between gap-10 lg:gap-4">
                <label className="flex items-center gap-2 text-sm sm:text-base">
                  <input type="radio" name="subject" value="General Inquiry" />
                  General Inquiry
                </label>
                <label className="flex items-center gap-2 text-sm sm:text-base">
                  <input type="radio" name="subject" value="Internship Program" />
                  Internship Program
                </label>
                <label className="flex items-center gap-2 text-sm sm:text-base">
                  <input type="radio" name="subject" value="How to Apply" />
                  How to Apply
                </label>
              </div>
            </div>

            <div className="mb-10 lg:mb-0">
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" rows={3} placeholder="Write your message..." className="w-full bg-transparent border-b border-white py-2 outline-none resize-none" />
            </div>
          </form>

          <div className="flex flex-col flex-wrap sm:flex-row justify-between gap-10 lg:gap-4 mt-4 text-sm sm:text-base">
            <a href="tel:+01233456789" className="flex items-center gap-2 whitespace-nowrap">
              <BiSolidPhoneCall className="text-xl" />
              +0123 345 6789
            </a>
            <a href="mailto:cyncra@gmail.com" className="flex items-center gap-2 whitespace-nowrap">
              <MdEmail className="text-xl" />
              cyncra@gmail.com
            </a>
            <p className="flex items-center gap-2 whitespace-nowrap">
              <FaLocationDot className="text-xl" />
              Lagos State, Nigeria
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between gap-10 lg:gap-4 mt-6">
            <Image src="/images/cyncra_logo.svg" width={140} height={28} alt="cyncra_logo" />
            <div className="flex flex-col md:flex-row lg:flex-row gap-10 lg:gap-4">
              <Image src="/icons/facebook.svg" alt="Facebook" width={30} height={30} />
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={30} height={30} />
              <Image src="/icons/twitter.svg" alt="Twitter" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}   