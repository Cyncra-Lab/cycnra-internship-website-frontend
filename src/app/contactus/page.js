import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

export default function ContactUs() {
  console.log("Contact page loaded");

  return (
    <>
      <section className="relative min-h-screen bg-[url('/images/hero_background.png')] bg-cover bg-center">
        <div className="flex gap-30 justify-between px-20 py-15">
          {/* Left Section */}
          <div className="w-[45%] py-17">
            <button className="bg-[var(--header-background)] flex items-center gap-2 py-4 px-6 rounded-[12px] text-[var(--text-white)]">
              <Image src="/icons/arrow_down.svg" width={32} height={32} alt="arrow-down" />
              Contact Us
            </button>
            <h2 className="text-[var(--header-background)] text-5xl font-bold mt-8">
              We're Here to Help
            </h2>
            <p className="text-[var(--header-background)] text-xl opacity-67 mt-8">
              Have questions about our internship program? Reach out and we'll
              get back to you, Need help with application or want to know more?
              We'd love to hear from you!
            </p>

            <div className="mt-8">
              <Image
                src="/images/contact_image.png"
                width={600}
                height={500}
                alt="contact_image"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-[var(--header-background)] w-[55%] rounded-[20px] px-10 py-10">
            <h2 className="text-[var(--text-white)] text-4xl font-bold">
              Contact Information
            </h2>
            <p className="text-[var(--text-white)] text-2xl mt-3">
              Get in touch with us.
            </p>

            <form className="mt-20 text-[var(--text-white)]">
              <div className="flex justify-between gap-8">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="first-name" className="mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="bg-transparent border-b border-white py-2 outline-none"
                  />
                </div>

                <div className="flex flex-col w-[48%]">
                  <label htmlFor="last-name" className="mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="bg-transparent border-b border-white py-2 outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-8 mt-6">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="email" className="mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-transparent border-b border-white py-2 outline-none"
                  />
                </div>

                <div className="flex flex-col w-[48%]">
                  <label htmlFor="phone-number" className="mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    className="bg-transparent border-b border-white py-2 outline-none"
                  />
                </div>
              </div>

              <div className="mt-20">
                <p className="mb-5 text-xl font-bold">Select Subject?</p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="subject" value="General Inquiry" />
                    General Inquiry
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="subject"
                      value="Internship Program"
                    />
                    Internship Program
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="subject" value="How to Apply" />
                    How to Apply
                  </label>
                </div>
              </div>

              <div className="mt-20">
                <label htmlFor="message" className="mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full bg-transparent border-b border-white py-2 outline-none resize-none"
                />
              </div>
            </form>

            <div className="mt-10 text-[var(--text-white)] flex justify-between space-y-2">
              <a href="tel:+01233456789" className="flex items-center gap-3">
                <BiSolidPhoneCall className="text-2xl"/>
                +0123 345 6789
              </a>
              <a href="mailto:cyncra@gmail.com" className="flex items-center gap-3">
                <MdEmail className="text-2xl"/>
                cyncra@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <FaLocationDot className="text-2xl"/>
                Lagos State, Nigeria
             </p>
            </div>

            <div className="mt-8 flex justify-between items-center gap-4">
              <Image
                src="/images/cyncra_logo.svg"
                width={190}
                height={28}
                alt="cyncra_logo"
              />
              <div className="flex gap-5">
                <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={35}
                height={35}
              />
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={35}
                height={35}
              />
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={35}
                height={35}
              />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
