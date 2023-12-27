import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/MainHeader/Header";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aspiring Future Consultancy",
  description: "A platform to find universities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
