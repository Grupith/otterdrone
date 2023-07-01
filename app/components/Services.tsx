import React from "react"
import Icon_RealEstate from "../../public/assets/Icons/Icon_RealEstate.png"
import Icon_Business from "../../public/assets/Icons/Icon_Company.png"
import Icon_Event from "../../public/assets/Icons/Icon_Event.png"
import Icon_Project from "../../public/assets/Icons/Icon_Project.png"
import Image from "next/image"

export const Services = () => {
  const servicesOffered = [
    {
      title: "Real Estate",
      info: "Sell houses faster and make your properties shine!",
      img: {
        src: Icon_RealEstate,
        alt: "real estate icon",
      },
    },
    {
      title: "Business Tour",
      info: "Bring in customers and attact new hires!",
      img: {
        src: Icon_Business,
        alt: "business icon",
      },
    },
    {
      title: "Event",
      info: "Show highlights and capture memories from your event!",
      img: {
        src: Icon_Event,
        alt: "event icon",
      },
    },
    {
      title: "Custom Projects",
      info: "Need Aerial shots of your custom project? We're to help!",
      img: {
        src: Icon_Project,
        alt: "project icon",
      },
    },
  ]

  return (
    <ul className="flex justify-around">
      {servicesOffered.map((service) => (
        <div
          key={service.title}
          className="border border-black/30 flex flex-col justify-around items-center rounded-lg w-60 py-4 shadow-lg space-y-2"
        >
          <Image src={service.img.src} alt={service.img.alt} />
          <h1 className="text-2xl font-semibold">{service.title}</h1>
          <p className="text-center text-lg">{service.info}</p>
        </div>
      ))}
    </ul>
  )
}
