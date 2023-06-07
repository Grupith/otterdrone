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
      <body className={cabin.className}>{children}</body>
    </html>
  )
}
