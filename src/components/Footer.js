import Image from 'next/image';

export default function Footer() {
    
    const date = new Date();
    const currentYear = date.getFullYear();
 
  return (
    <footer className='mt-20 font-jakarta'>
      {/* Top Curve SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-[100px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C400,0 1040,0 1440,100 L1440,0 L0,0 Z"
            fill="var(--background)"
          />
        </svg>
      </div>

      {/* Top Right Image */}
      <div className="absolute right-0 top-0 z-10">
        <Image src="/images/footer_image.png" width={550} height={500} alt="footer_image" className="rounded-full" />
      </div>

      <div className="container mx-auto z-20 relative">
        <div className="pt-[100px] mb-3">
          <h3 className="text-3xl lg:text-4xl text-white mb-4">Ready to get started?</h3>
          <button className="bg-white text-sm text-[var(--footer-text-dark)] rounded-full px-20 py-4 min-w-[400px]">
            KICKSTART YOUR FUTURE
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm pt-[150px]">
          {/* Column 1 */}
          <div>
            <p className="font-bold mb-4 text-[var(--text-white)]">NAVIGATION</p>
            <ul className="space-y-2 text-[var(--text-light-gray)]">
              <li>Home</li>
              <li>About Us</li>
              <li>What We Do</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <p className="font-bold mb-4 text-[var(--text-white)]">WHAT WE DO</p>
            <ul className="space-y-2 text-[var(--text-light-gray)]">
              <li>Encouraging Testing</li>
              <li>Shape Future Intern</li>
              <li>Sharing Information</li>
              <li>Building Leadership</li>
              <li>Shining a Light</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <p className="font-bold mb-4 text-[var(--text-white)]">LEGAL</p>
            <ul className="space-y-2 text-[var(--text-light-gray)]">
              <li>General Info</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <p className="font-bold mb-4 text-[var(--text-white)]">TALK TO US</p>
            <ul className="space-y-2 text-[var(--text-light-gray)]">
              <li>support@er.com</li>
              <li>+66 2399 1145</li>
              <li>Contact Us</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-12 pt-4 flex justify-between items-center text-xs">
          <Image src="/images/cyncra_logo.svg" width={190} height={28} alt='cyncra_logo' />
          <p className='text-[var(--text-light-gray)]'>&copy; {currentYear} Lift Media. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Image src="/icons/facebook.svg" alt="Facebook" width={25} height={25} />
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={25} height={25} />
            <Image src="/icons/twitter.svg" alt="Twitter" width={25} height={25} />
          </div>
        </div>
      </div>
    </footer>
  );
}
