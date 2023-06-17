"use client"
import droneVideo from "../public/assets/droneVideo.mp4"
import Link from "next/link"
import VideoPlayer from "./components/VideoPlayer"

const Home = () => {
  return (
    <main className="min-h-screen pt-20">
      <section className="text-center text-xl">
        <h1 className="text-4xl font-light py-10">
          FPV Drone Photography & Videography
        </h1>
        <div className="flex justify-center">
          <VideoPlayer />
        </div>
        <p className="text-center text-xl font-light py-8 sm:text-2xl">
          - Founded and Operated in <span className="font-bold">Wisconsin</span>{" "}
          -
        </p>
      </section>
      <section>
        <h2 className="text-center text-4xl font-medium py-4">
          Services We Offer
        </h2>
        <ul className="flex flex-col items-center justify-center text-xl py-4 font-light space-y-5 sm:flex-row sm:space-x-5 sm:items-end">
          <li className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg shadow-md">
            Real Estate
          </li>
          <li className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg shadow-md">
            Company Projects/Tours
          </li>
          <li className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg shadow-md">
            Public/Private Events
          </li>
          <li className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg shadow-md">
            Custom Projects
          </li>
        </ul>
      </section>
      <section className="text-center">
        <h2 className="text-center text-4xl font-medium py-4">
          Why OtterDrone?
        </h2>
      </section>
    </main>
  )
}

export default Home
