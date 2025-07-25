import { Oxygen } from "next/font/google";
import "../../styles/globals.css";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
});

export const metadata = {
  title: "Cyncra Internship",
  description: "Cyncra Internship Website",
  icons: {
    icon: '/cyncra-short.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={oxygen.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}