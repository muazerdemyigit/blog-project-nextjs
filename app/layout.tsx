import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import React from "react";
export const metadata = {
  title: 'Muaz Erdem YİĞİT',
  description: 'Muaz Erdem Yigit`s Blog',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-tl-full">
        <Image src="/logo.png" width={400} height={400} className="mx-auto rounded-br-full " alt={"logo"} />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4 animate-pulse">Blog</h1>
        </Link>
        <p className="text-slate-300 animate-pulse">🤟 Welcome to my tech blog. 💻</p>
        <Link href="https://github.com/muazerdemyigit">
          <p className="text-slate-300 animate-pulse">GitHub</p>
        </Link>
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-8 py-8 text-center text-slate-400 ">
        <p> Muaz Erdem YİĞİT</p>
      </div>
    </footer>
  );


  return (

    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-6 ">
          {header}
          {children}
          {footer}
          <Analytics />
        </div>
      </body>
    </html>


  )
}
