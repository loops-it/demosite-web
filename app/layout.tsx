import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// import { useEffect } from "react";


export const metadata: Metadata = {
  title: "KodeTech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // useEffect(() => {
  //   import('bootstrap/dist/js/bootstrap.bundle.min.js');
  // }, []);
  return (
    <html lang="en">
      <body>
      <AntdRegistry>
        <Header />
        {children}
        <Footer />
        </AntdRegistry>
        </body>
    </html>
  );
}
