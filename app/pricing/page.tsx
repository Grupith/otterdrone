import Link from "next/link"
import React from "react"
import { IoCheckmarkSharp } from "react-icons/io5"

interface Card {
  title: string
  subtitle: string
  price: string
  features: string[]
}

export default function Pricing() {
  const PricingCards: Card[] = [
    {
      title: "Real Estate",
      subtitle: "Basic",
      price: "$249",
      features: [
        "Interior Video Tour",
        "Exterior Aerial Photos",
        "Same Day Delivery",
      ],
    },
    {
      title: "Real Estate",
      subtitle: "Pro",
      price: "$499",
      features: [
        "Interior/Exterior Video Tour",
        "Professionally Edited Photos",
        "Instantly Post to Realtor Sites",
        "Next Day Delivery",
      ],
    },
    {
      title: "Business Tour",
      subtitle: "Pro",
      price: "$699",
      features: [
        "Market Your Business",
        "Attract New Employees",
        "1-4 Minute Video",
        "Professionally Edited",
        "Companies, Restaurants, Golf Courses, Shops, Etc.",
      ],
    },
    {
      title: "Event",
      subtitle: "Public/Private",
      price: "$899",
      features: [
        "Capture Event Highlights",
        "Professionally edited",
        "1-10 Minute Video",
        "Corporate Events, Weddings, Parades, Concerts, Etc.",
      ],
    },
    {
      title: "Custom",
      subtitle: "Pro",
      price: "$$$",
      features: [
        "Multiple Day Project?",
        "Personal Aerial Photos/Videos?",
        "Construction Projects?",
      ],
    },
  ]
  return (
    <div className="pt-16 bg-gray-200 min-h-screen overflow-x-hidden">
      <h1 className="text-center text-4xl mt-10 font-semibold">
        Choose your Package
      </h1>
      <p className="text-center pt-6 text-xl mx-16">
        Quick setup! Once complete, OtterDrone will contact you shortly!
      </p>
      <div className="flex flex-col justify-center items-center my-4 space-y-10">
        {PricingCards.map((card) => (
          <div className="white border border-black/25 rounded-lg bg-white w-fit py-8 px-8 space-y-4 shadow-lg">
            <h2 className="text-center text-4xl font-medium">{card.title}</h2>
            <h3 className="text-center text-xl font-light">{card.subtitle}</h3>
            <p className="text-center text-5xl font-semibold">{card.price}</p>
            {card.features.map((feature) => (
              <div className="flex items-center text-xl">
                <IoCheckmarkSharp />
                <span className="ml-2">{feature}</span>
              </div>
            ))}
            <div className="flex justify-center py-2">
              <button className="text-lg text-white font-medium rounded-md bg-gradient-to-tr from-blue-500 to-blue-600 py-1 px-12 hover:scale-105 transition-all">
                Start Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
