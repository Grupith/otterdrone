import Navbar from "./components/Navbar"
import "./globals.css"
import { Inter, Cabin } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const cabin = Cabin({ subsets: ["latin"] })

export const metadata = {
  title: "OtterDrone",
  description:
    "Photo/Video Drone Services for Real Estate, Businesses and Events in Wisconsin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body className={cabin.className}>
        <Navbar />
        {children}
        <footer className="text-center py-2 bg-gray-200">
          <p>© 2023 OtterDrone LLC. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
