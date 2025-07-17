import { Oxygen, Plus_Jakarta_Sans } from "next/font/google";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Cyncra internship AboutUs Page",
  description: "General information about Cyncra Internship program",
};

const AboutUsLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
};

export default AboutUsLayout;
