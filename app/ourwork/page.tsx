import React from "react"

export default function Ourwork() {
  const totalProjects = [
    {
      title: "Milwaukee Lakefront",
      body: "This is some body text of the job we did. It was a great experiance and we got to get some unique shots. ",
      photoURL:
        "https://www.jsonline.com/gcdn/presto/2019/07/24/PMJS/53cff075-e316-471a-bc49-82e8a8d2a913-Lakefront_Bradford_Drone_02764.JPG?width=660&height=372&fit=crop&format=pjpg&auto=webp",
    },
    {
      title: "Holy Hill",
      body: "We got beatiful photos and videos of the holy hill church and surrounding areas.",
      photoURL: "https://www.holyhill.com/images/stories/Aerial-1.png",
    },
  ]
  return (
    <div className="pt-16 bg-gradient-to-tr from-gray-300 to-stone-300 min-h-screen">
      <h1 className="text-center text-4xl mt-10 font-semibold">Our Work</h1>
      <section className="px-6 py-6 space-y-6">
        {totalProjects.map((project) => (
          <div key={project.title} className="border border-black/30 shadow-lg">
            <img src={project.photoURL} />
            <h2 className="text-xl font-bold text-center py-4">
              {project.title}
            </h2>
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
