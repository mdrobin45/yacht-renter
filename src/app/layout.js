import { Inter } from "next/font/google";
import Footer from "./components/global/footer/footer";
import Header from "./components/global/header/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Yachts and Boat",
   description: "New experience with yachts",
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
