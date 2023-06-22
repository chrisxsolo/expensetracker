import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import "./globals.css"

export default function RootLayout({children}){
  return (
    <html lang = "en">
    <head>
      <title>Next 13 Demo</title>
      <meta name ="description" content= "Generated by create next app"/>
    </head>
    <body>
      <Navbar />
      <div>{children}</div>
    </body>
    </html>
  );
}