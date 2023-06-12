"use client"
import Link from "next/link"
import React, { useState } from "react"
import { LuAlignRight, LuMenu } from "react-icons/lu"
import logo from "../../public/assets/favicon.png"

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <nav className="bg-gray-100 py-4 px-8 flex items-center justify-between shadow-md fixed top-0 z-20 w-full bg-opacity-75">
      <Link href="/">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold cursor-pointer select-none">
            OtterDrone
          </h1>
          <img src={logo.src} alt="otter image" className="w-8 h-8 ml-1" />
        </div>
      </Link>
      <div onClick={() => setActiveMenu((prev) => !prev)} className="relative">
        {!activeMenu ? (
          <LuMenu size={30} className="cursor-pointer" />
        ) : (
          <LuAlignRight size={30} className="cursor-pointer" />
        )}
        {activeMenu && (
          <div className="absolute top-20 text-center right-3 bg-white px-5 py-3 rounded-md shadow-md z-20">
            <ul className="text-xl w-24">
              <Link href="/">
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link href="/pricing">
                <li className="cursor-pointer">Pricing</li>
              </Link>
              <Link href="/ourwork">
                <li className="cursor-pointer">Our Work</li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
