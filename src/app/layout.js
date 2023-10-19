import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ANIMEHUB - tempat untuk menonton anime kesukaan kamu secara gratis",
  description:
    "animehub adalah tempat untuk menonton anime kesukaan kamu secara gratis, animehub menyediakan konten anime yang poluler, terbaru, & trending. dengan desain yang friendly animehub bikin kamu nyaman untuk menonton, YUK NONTON SEKARANG!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
