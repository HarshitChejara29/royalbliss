import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import Banner from "@/components/globals/banner";
import VirtualBtn from "@/components/globals/virtualbtns";


export const metadata: Metadata = {
  title: "Royal Bliss",
  description: "Best Magnesium Flakes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Banner/>
        <Header/>  
        {children}
        <Footer/>
        {/* <VirtualBtn/> */}
      </body>
    </html>
  );
}
