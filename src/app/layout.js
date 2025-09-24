import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/utils/Navbar";



export const metadata = {
  title: "Your Name - Full Stack Developer Portfolio",
  description: "Professional portfolio showcasing modern web development skills, projects, and experience in React, Next.js, and full-stack development.",
  keywords: "web developer, full stack developer, React, Next.js, portfolio, JavaScript, TypeScript",
  author: "Your Name",
  viewport: "width=device-width, initial-scale=1",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
