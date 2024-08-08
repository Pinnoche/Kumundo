import { Inter } from "next/font/google";
import Navbar from './Navbar';
import "./globals.css";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kumundo Degen App",
  description: "Built by Pinnoche",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
