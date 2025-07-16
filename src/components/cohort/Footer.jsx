import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#02353C] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 relative">
        <div>
          <h4 className="font-bold mb-2">NAVIGATION</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>What we do</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">WHAT WE DO</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Encouraging Testing</li>
            <li>Shape Future Intern</li>
            <li>Sharing Information</li>
            <li>Building Leadership</li>
            <li>Shining a Light</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">LEGAL</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>General Info</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Talk to Us</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>support@cyncra.com</li>
            <li>+6623991145</li>
            <li>Contact Us</li>
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <hr className="border-t border-gray-700 mb-4" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 px-4 md:px-12">
          <div className="flex-shrink-0">
            <Image
              src="/Group.png"
              alt="Cyncra Logo"
              width={100}
              height={40}
              className="rounded-full"
            />
          </div>

          <div className="text-center">© 2025 CYNCRA. All rights reserved.</div>

          <div className="flex space-x-4 text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#02353C] p-2 rounded-xl border border-white cursor-pointer hover:bg-blue-600 transition">
                <FaFacebookF size={16} />
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#02353C] p-2 rounded-xl border border-white cursor-pointer hover:bg-blue-600 transition">
                <FaLinkedinIn size={16} />
              </div>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#02353C] p-2 rounded-xl border border-white cursor-pointer hover:bg-blue-600 transition">
                <FaTwitter size={16} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
