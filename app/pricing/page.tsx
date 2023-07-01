import Link from "next/link"
import React from "react"
import { Card } from "../components/Card"

interface Card {
  id: string
  title: string
  subtitle: string
  price: string
  features: string[]
}

export default function Pricing() {
  const PricingCards: Card[] = [
    {
      id: "p1",
      title: "Real Estate",
      subtitle: "Basic",
      price: "$299",
      features: [
        "List your House",
        "Interior Video Tour",
        "Exterior Aerial Photos",
        "Same Day Delivery",
      ],
    },
    {
      id: "p2",
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
      id: "p3",
      title: "Business Tour",
      subtitle: "Pro",
      price: "$699",
      features: [
        "Market Your Business",
        "1-4 Minute Video",
        "Businesses, Restaurants, Golf Course",
        "Golf Courses, Stores, Etc.",
      ],
    },
    {
      id: "p4",
      title: "Event",
      subtitle: "Public/Private",
      price: "$899",
      features: [
        "Capture Event Highlights",
        "1-10 Minute Video",
        "Weddings, Parades, Concerts",
        "Corporate Events, Gatherings.",
      ],
    },
    {
      id: "p5",
      title: "Custom",
      subtitle: "Pro",
      price: "$$$",
      features: [
        "Multiple Day Project?",
        "Personal Aerial Photos/Videos?",
        "Construction Projects?",
        "Special Location?",
      ],
    },
  ]
  return (
    <div className="pt-16 bg-gradient-to-tr from-stone-200 to-gray-300 min-h-screen overflow-x-hidden">
      <h1 className="text-center text-4xl mt-10 font-semibold">
        Choose your Package
      </h1>
      <p className="text-center pt-6 text-xl mx-16">
        Simple Pricing, No Hidden Costs!
      </p>
      <div className="flex justify-center my-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {PricingCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              features={card.features}
              price={card.price}
            />
          ))}
        </div>
      </div>
      <section className="flex justify-center space-x-2 text-2xl my-16">
        <p className="font-semibold">Got Questions?</p>
        <p>
          Visit our{" "}
          <Link
            href="/faq"
            className="text-blue-700 font-normal hover:text-blue-500"
          >
            FAQ
          </Link>{" "}
          Page
        </p>
      </section>
    </div>
  )
}
