"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect } from "react";
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'


const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <SessionProvider >
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <div className="main-content">{children}</div>
      </body> 
    </html>
    </SessionProvider>

  )
}
