import type { Metadata } from "next";
import "./globals.css";
// import LiquidBG from "@/components/LiquidBG"
// import Cursor from "@/components/cursor"
import Cursor from "@/components/Cursor"
import Aurora from "@/components/Aurora"

export const metadata: Metadata = {
  title: 'Happy Birthday!',
  description: 'Selamat ulang tahun sayangku',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <LiquidBG /> Background efek */}
        <Aurora 
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <Cursor/>
        {children}       {/* Semua konten tetap di atas */}
      </body>
    </html>
  )
}