import React from "react";
import Card from "../components/Card";

const projects = [
  {
    title: "Clean Water Initiative",
    image: "/project1.jpg",
    description: "Providing clean water to rural communities.",
  },
  {
    title: "School Supplies Drive",
    image: "/project2.jpg",
    description: "Distributing supplies to children in need.",
  },
  {
    title: "Health Camps",
    image: "/project3.jpg",
    description: "Organizing free health checkups.",
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}