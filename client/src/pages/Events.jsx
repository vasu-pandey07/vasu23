import React from "react";
import Card from "../components/Card";

const upcoming = [
  { title: "Annual Fundraiser", image: "/event1.jpg", description: "Join us for our annual fundraising event." },
  { title: "Volunteer Meetup", image: "/event2.jpg", description: "Meet fellow volunteers and share experiences." },
];

const past = [
  { title: "Health Camp 2024", image: "/event3.jpg", description: "Free health checkups for the community." },
];

export default function Events() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Events</h1>
      <h2 className="text-xl font-bold text-green-700 mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {upcoming.map((event) => (
          <Card
            key={event.title}
            image={event.image}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
      <h2 className="text-xl font-bold text-blue-700 mb-4">Past Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {past.map((event) => (
          <Card
            key={event.title}
            image={event.image}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}