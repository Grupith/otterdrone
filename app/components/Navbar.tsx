"use client"
import Link from "next/link"
import React, { useState } from "react"
import { LuAlignRight, LuMenu } from "react-icons/lu"
import logo from "../../public/assets/favicon.png"

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <nav className="bg-gray-100 py-4 px-8 flex items-center justify-between shadow-md fixed top-0 z-20 w-full bg-opacity-75 md:justify-around">
      <Link href="/">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold cursor-pointer select-none">
            OtterDrone
          </h1>
          <img src={logo.src} alt="company logo" className="w-8 h-8 ml-1" />
        </div>
      </Link>
      <div className="hidden md:flex">
        <ul className="font-medium flex space-x-8 items-center">
          <Link href="/">
            <li className="cursor-pointer text-xl py-1 hover:text-stone-600">
              Home
            </li>
          </Link>
          <Link href="/pricing">
            <li className="cursor-pointer text-xl py-1 hover:text-stone-600">
              Pricing
            </li>
          </Link>
          <Link href="/ourwork">
            <li className="cursor-pointer text-xl py-1 hover:text-stone-600">
              Our Work
            </li>
          </Link>
          <Link href="/faq">
            <li className="cursor-pointer text-xl py-1 hover:text-stone-600">
              FAQ
            </li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer text-xl py-1 hover:text-stone-600">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div
        onClick={() => setActiveMenu((prev) => !prev)}
        className="relative md:hidden"
      >
        {!activeMenu ? (
          <LuMenu size={30} className="cursor-pointer" />
        ) : (
          <LuAlignRight size={30} className="cursor-pointer" />
        )}
        {activeMenu && (
          <div className="absolute top-10 right-0 bg-white px-6 py-3 rounded-md shadow-lg z-20 w-36">
            <ul className="text-xl font-semibold text-center">
              <Link href="/">
                <li className="cursor-pointer text-xl py-1 hover:text-stone-600">
                  Home
                </li>
              </Link>
              <Link href="/pricing">
                <li className="cursor-pointer text-xl py-1 hover:text-stone-600">
                  Pricing
                </li>
              </Link>
              <Link href="/ourwork">
                <li className="cursor-pointer text-xl py-1 hover:text-stone-600">
                  Our Work
                </li>
              </Link>
              <Link href="/faq">
                <li className="cursor-pointer text-xl py-1 hover:text-stone-600">
                  FAQ
                </li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer text-xl py-1 hover:text-stone-600">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
