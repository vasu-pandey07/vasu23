import React from "react";
import Card from "../components/Card";

const articles = [
  {
    title: "How We Empower Communities",
    image: "/blog1.jpg",
    description: "Read about our latest initiatives and success stories.",
  },
  {
    title: "Volunteer Spotlight",
    image: "/blog2.jpg",
    description: "Meet our amazing volunteers making a difference.",
  },
];

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Blog & News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <Card
            key={article.title}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </div>
  );
}