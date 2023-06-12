import Link from "next/link"
import React from "react"

export default function Pricing() {
  return (
    <div className="pt-16 bg-gray-200 min-h-screen overflow-x-hidden">
      <h1 className="text-center text-4xl mt-10 font-semibold">Our Pricing</h1>
      <p className="text-center pt-6 text-xl mx-16">Choose your Package Type</p>
      <section className="my-10 space-y-12 sm:flex sm:justify-between px-6">
        {/* Real Estate Basic */}
        <div className="border border-black/30 rounded-lg w-full m-auto px-10 bg-gradient-to-tr from-stone-200 to-stone-300 py-4 shadow-lg">
          <h2 className="text-3xl font-medium text-center">Real Estate</h2>
          <h3 className="text-xl text-center py-1">Basic</h3>
          <p className="text-center text-5xl py-2 font-semibold">$249</p>
          <ul className="list-disc list-inside text-lg py-2">
            <li>Interior Video Tour</li>
            <li>Exterior Aerial Photos</li>
            <li>Same Day Delivery</li>
          </ul>
          <div className="flex justify-center py-4">
            <Link href="/contact">
              <button className="bg-blue-500 py-1 px-8 rounded-md text-white text-lg font-medium shadow-lg hover:scale-105 transition-all">
                Start Package
              </button>
            </Link>
          </div>
        </div>
        {/* Real Estate Pro */}
        <div className="border border-black/30 rounded-lg w-full m-auto px-10 bg-white py-4 shadow-lg bg-gradient-to-tr from-stone-200 to-stone-300">
          <h2 className="text-3xl font-medium text-center">Real Estate</h2>
          <h3 className="text-xl text-center font-semibold py-1">Pro</h3>
          <p className="text-center text-5xl py-2 font-semibold">$499</p>
          <ul className="list-disc list-inside text-lg py-2">
            <li>Interior/Exterior Video Tour</li>
            <li>Professionally Edited Photos</li>
            <li>Instantly Post to Realtor Sites</li>
            <li>Next Day Delivery</li>
          </ul>
          <div className="flex justify-center py-4">
            <Link href="/contact">
              <button className="bg-blue-500 py-1 px-8 rounded-md text-white text-lg font-medium shadow-lg hover:scale-105 transition-all">
                Start Package
              </button>
            </Link>
          </div>
        </div>
        {/* Business Tour */}
        <div className="border border-black/30 rounded-lg w-full m-auto px-10 bg-white py-4 shadow-lg bg-gradient-to-tr from-indigo-100 to-indigo-200">
          <h2 className="text-3xl font-medium text-center">Business Tour</h2>
          <h3 className="text-xl text-center font-semibold py-1">Pro</h3>
          <p className="text-center text-5xl py-2 font-semibold">$699</p>
          <ul className="list-disc list-inside text-lg py-2">
            <li>Market Your Business</li>
            <li>Attract New Employees</li>
            <li>1-4 Minute Video</li>
            <li>Professionally Edited</li>
            <li>Companies, Resturants, Golf Courses, Shops, Etc.</li>
          </ul>
          <div className="flex justify-center py-4">
            <Link href="/contact">
              <button className="bg-blue-500 py-1 px-8 rounded-md text-white text-lg font-medium shadow-lg hover:scale-105 transition-all">
                Start Package
              </button>
            </Link>
          </div>
        </div>
        {/* Event */}
        <div className="border border-black/30 rounded-lg w-full m-auto px-10 bg-white py-4 shadow-lg bg-gradient-to-tr from-indigo-100 to-indigo-200">
          <h2 className="text-3xl font-medium text-center">Event</h2>
          <h3 className="text-lg text-center font-semibold py-1">
            Public/Private
          </h3>
          <p className="text-center text-5xl py-2 font-semibold">$899</p>
          <ul className="list-disc list-inside text-lg py-2">
            <li>Capture Event Highlights</li>
            <li>Professionally edited</li>
            <li>1-10 Minute Video</li>
            <li>Coorperate Events, Weddings, Parades, Concerts, Etc.</li>
          </ul>
          <div className="flex justify-center py-4">
            <Link href="/contact">
              <button className="bg-blue-500 py-1 px-8 rounded-md text-white text-lg font-medium shadow-lg hover:scale-105 transition-all">
                Start Package
              </button>
            </Link>
          </div>
        </div>
        {/* Custom */}
        <div className="border border-black/30 rounded-lg w-full m-auto px-10 bg-white py-4 shadow-lg bg-gradient-to-tr from-rose-200 to-rose-300">
          <h2 className="text-3xl font-medium text-center">Custom</h2>
          <h3 className="text-xl text-center font-semibold py-1">Pro</h3>
          <p className="text-center text-5xl py-2 font-semibold">$$$</p>
          <ul className="list-disc list-inside text-lg py-2">
            <li>Multiple Day Project?</li>
            <li>Personal Aerial Photos/Videos?</li>
            <li>Construction Projects?</li>
          </ul>
          <div className="flex justify-center py-4">
            <Link href="/contact">
              <button className="bg-blue-500 py-1 px-8 rounded-md text-white text-lg font-medium shadow-lg hover:scale-105 transition-all">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
