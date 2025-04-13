import { Geist, Geist_Mono } from "next/font/google";

import Navbar from './navbar'
import Footer from './footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function NekoLayout({ children }) {
  console.log(children.metadata)
  return (
    <html lang="en">
      <head>
        <title>Nekoverse</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  )
}
