import React from "react";
import Card from "../components/Card";

const team = [
  { name: "Jane Doe", role: "Founder", image: "/team1.jpg" },
  { name: "John Smith", role: "Director", image: "/team2.jpg" },
  { name: "Alice Lee", role: "Coordinator", image: "/team3.jpg" },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">About Us</h1>
      <p className="text-gray-700 mb-8">
        Our NGO is dedicated to creating sustainable change in communities through education, healthcare, and empowerment.
      </p>
      <h2 className="text-2xl font-bold text-green-700 mb-4">Our Values</h2>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>Integrity</li>
        <li>Inclusivity</li>
        <li>Transparency</li>
        <li>Compassion</li>
      </ul>
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {team.map((member) => (
          <Card
            key={member.name}
            image={member.image}
            title={member.name}
            description={member.role}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold text-green-700 mb-4">Our Journey</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <ol className="list-decimal list-inside text-gray-700">
          <li>2015: NGO Founded</li>
          <li>2017: First major project completed</li>
          <li>2020: Expanded to 3 new regions</li>
          <li>2023: 10,000+ lives impacted</li>
        </ol>
      </div>
    </div>
  );
}