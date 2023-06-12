"use client"
import droneVideo from "../public/assets/droneVideo.mp4"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200">
      <section className="relative shadow-sm">
        <video className="object-cover w-full min-h-screen" autoPlay muted loop>
          <source src={droneVideo} type="video/mp4" />
        </video>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-32 text-4xl font-bold">
          Give your business a new look!
        </h2>
      </section>
      <section className="py-4">
        <h1 className="text-center text-4xl font-semibold py-8">
          What we offer
        </h1>
        <h3 className="text-center text-xl font-bold">
          FPV Drone Photography/Videography
        </h3>
        <div className="flex justify-center">
          <ul className="list-disc list-inside text-xl py-6 space-y-2">
            <li className="font-semibold">Real Estate</li>
            <li className="font-semibold">Business Projects/Tours</li>
            <li className="font-semibold">Public/Private Events</li>
            <li className="font-semibold">Construction/Development Projects</li>
            <li className="font-semibold">Custom Projects</li>
          </ul>
        </div>
        <p className="text-center text-xl font-medium text-gray-600">
          - Located in Southeast Wisconsin -
        </p>
      </section>
      <section className="mt-2">
        <h1 className="text-center text-4xl font-semibold py-2">
          Smooth Process
        </h1>
        <div className="flex justify-center">
          <ul className="list-disc list-inside text-xl py-2 space-y-3">
            <li className="font-medium">Clear Communication</li>
            <li className="font-medium">No Hidden Addons</li>
            <li className="font-medium">Next Day Results</li>
          </ul>
        </div>
        <h2 className="text-center text-2xl font-medium pt-4">
          Check out our Pricing Packages
        </h2>
        <div className="flex justify-center py-6">
          <Link href="/pricing">
            <button className="bg-blue-500 py-2 px-8 rounded-md text-white text-lg font-medium shadow-lg hover:scale-105 transition-all">
              View Pricing
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
