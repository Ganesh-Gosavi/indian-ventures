import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const manrope_init = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-manrope",
});
export const metadata = {
  title: "Indian Ventures",
  description: "A Service Provider Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${manrope_init.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
