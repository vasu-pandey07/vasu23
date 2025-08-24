import React from "react";
import Form from "../components/Form";

export default function Contact() {
  const fields = [
    { name: "name", label: "Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "message", label: "Message", required: true },
  ];

  const handleSubmit = (values) => {
    alert("Contact submitted: " + JSON.stringify(values));
  };

  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Contact Us</h1>
      <Form fields={fields} onSubmit={handleSubmit} buttonText="Send Message" />
      <div className="mt-8 bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-bold text-blue-700 mb-2">Our Address</h2>
        <p className="text-gray-700 mb-2">123 NGO Street, City, Country</p>
        <p className="text-gray-700 mb-2">Phone: +123 456 7890</p>
        <p className="text-gray-700 mb-2">Email: info@ngo.org</p>
        <div className="mt-4 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          Google Maps Placeholder
        </div>
      </div>
    </div>
  );
}