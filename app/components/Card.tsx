import React from "react"
import { IoCheckmarkSharp } from "react-icons/io5"

interface CardProps {
  id: string
  title: string
  subtitle: string
  price: string
  features: string[]
}

export const Card: React.FC<CardProps> = ({
  id,
  title,
  subtitle,
  price,
  features,
}) => {
  return (
    <div
      key={id}
      className="border border-black/10 rounded-lg w-96 shadow-lg bg-gray-100"
    >
      <div className="flex flex-col items-center justify-around space-y-4 py-4 h-full">
        <header className="space-y-1">
          <h2 className="text-center text-4xl font-normal">{title}</h2>
          <h3
            className={`text-center text-xl ${
              subtitle == "Pro" ? "font-bold" : "font-light"
            }`}
          >
            {subtitle}
          </h3>
        </header>
        <p className="text-center text-5xl font-semibold">{price}</p>
        <main>
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center text-xl justify-start my-4"
            >
              <IoCheckmarkSharp />
              <span className="ml-2">{feature}</span>
            </div>
          ))}
        </main>
        <div className="flex justify-center py-2">
          <button className="text-lg text-white font-light rounded-md bg-gradient-to-tr from-blue-500 to-blue-600 py-1 px-10 hover:scale-105 transition-all">
            Start Package
          </button>
        </div>
      </div>
    </div>
  )
}
