"use client"
import droneVideo from "../public/assets/droneVideo.mp4"
import Link from "next/link"
import VideoPlayer from "./components/VideoPlayer"
import { FaCheckSquare } from "react-icons/fa"

const Home = () => {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-r from-white to-stone-200">
      <section className="text-center text-xl">
        <h1 className="text-4xl font-light py-10">
          Drone Photography & Videography
        </h1>
        <div className="flex justify-center">
          <VideoPlayer />
        </div>
      </section>
      <section className="py-4">
        <h2 className="text-center text-4xl font-medium py-4">
          Services We Offer
        </h2>
        <ul className="flex flex-col items-center justify-center text-xl font-light space-y-5 sm:flex-row sm:space-x-5 sm:items-end">
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
      <section className="pb-4">
        <h2 className="text-center text-4xl font-medium mt-6">
          Why choose us?
        </h2>

        <div className="flex justify-center py-4">
          <ul className="flex flex-col justify-center items-start space-y-3 font-medium">
            <div className="flex items-center space-x-2 text-xl">
              <FaCheckSquare />
              <p>Simple Pricing!</p>
            </div>
            <div className="flex items-center space-x-2 text-xl">
              <FaCheckSquare />
              <p>Quick Response!</p>
            </div>
            <div className="flex items-center space-x-2 text-xl">
              <FaCheckSquare />
              <p>Professional Editing!</p>
            </div>
            <div className="flex items-center space-x-2 text-xl">
              <FaCheckSquare />
              <p>Next Day Completion!</p>
            </div>
          </ul>
        </div>
        <p className="text-center font-medium text-lg py-4">
          - Founded and Operated in <span className="font-bold">Wisconsin</span>{" "}
          -
        </p>
      </section>
      <section>
        <h2 className="text-center text-4xl font-medium py-4">Get Started!</h2>
        <p className="text-center text-lg py-2 px-2">
          Head over to our pricing page to view the packages we are currently
          offering.
        </p>
        <div className="flex justify-center py-6">
          <Link href="/pricing">
            <button className="py-2 px-16 font-medium text-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 rounded-md text-white hover:scale-105 transition-all">
              {" "}
              View Pricing
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
