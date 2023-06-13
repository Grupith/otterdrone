import React from "react"

export default function Ourwork() {
  const totalProjects = [
    {
      title: "Milwaukee Lakefront",
      body: "This is some body text of the job we did. It was a great experiance and we got to get some unique shots. ",
      location: "Milwaukee, WI",
      photoURL:
        "https://www.jsonline.com/gcdn/presto/2019/07/24/PMJS/53cff075-e316-471a-bc49-82e8a8d2a913-Lakefront_Bradford_Drone_02764.JPG?width=660&height=372&fit=crop&format=pjpg&auto=webp",
    },
    {
      title: "Holy Hill",
      body: "We got beatiful photos and videos of the holy hill church and surrounding areas.",
      location: "Richfield, WI",
      photoURL: "https://www.holyhill.com/images/stories/Aerial-1.png",
    },
    {
      title: "Real Estate Package",
      body: "This is real estate project we contributed on. It helped the property sell faster then others in the area.",
      location: "Washington County, WI",
      photoURL:
        "https://cdn.landsearch.com/listings/4sCHB/large/de-pere-wi-103416492.jpg",
    },
  ]
  return (
    <div className="pt-16 bg-gradient-to-tr from-gray-300 to-stone-300 min-h-screen">
      <h1 className="text-center text-4xl mt-10 mb-5 font-semibold">
        Our Work
      </h1>
      <section className="px-6 py-6 space-y-6">
        {totalProjects.map((project) => (
          <div key={project.title} className="bg-white shadow-lg rounded-lg">
            <img src={project.photoURL} className="rounded-md" />
            <h2 className="text-xl font-bold text-center py-4">
              {project.title}
            </h2>
            <h3 className="text-center text-sm font-medium text-gray-800 pb-2">
              - {project.location} -
            </h3>
            <p className="text-center">{project.body}</p>
            <div className="flex justify-center py-4">
              <button className="bg-blue-500 py-1 px-6 rounded-md text-white text-md font-normal shadow-lg hover:scale-105 transition-all">
                View Project
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
