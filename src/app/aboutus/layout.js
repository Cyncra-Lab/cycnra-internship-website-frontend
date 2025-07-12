import { Oxygen } from "next/font/google";


const oxygen = Oxygen({
  subsets: ["latin"],
   weight: ["300", "400", "700"],
  variable: "--font-oxygen", 
});

export const metadata = {
  title: "Cyncra internship AboutUs Page",
  description: "General information about Cyncra Internship program",
};

const AboutUsLayout = ({children}) => {
  return (
    <>
        <html lang="en"  >
            <body
                className={` ${oxygen.className} antialiased`}
            >
                {children}
            </body>
        </html>
    </>
   
  )
}

export default AboutUsLayout