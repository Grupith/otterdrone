"use client"
import droneVideo from "../public/assets/droneVideo.mp4"
import Link from "next/link"
import VideoPlayer from "./components/VideoPlayer"

const Home = () => {
  return (
    <main className="min-h-screen pt-20">
      <section className="text-center text-xl font-semibold">
        <h2 className="text-4xl font-light py-10">
          Drone Photography & Videography Services
        </h2>

        <div className="flex justify-center">
          <VideoPlayer />
        </div>
        <p className="text-center text-3xl font-light py-12">
          - Located in <span className="font-bold">Wisconsin</span> -
        </p>
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

export default Home
