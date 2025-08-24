import React from "react";

export default function Card({ image, title, description, children }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
      {image && (
        <img src={image} alt={title} className="h-24 w-24 object-cover rounded-full mb-4" />
      )}
      <h3 className="font-bold text-lg text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
}