import { Inter } from "next/font/google";
import Navbar from './Navbar';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kumundo Degen App",
  description: "Built by Pinnoche",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-500`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
