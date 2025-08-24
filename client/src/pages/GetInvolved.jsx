import React from "react";
import Form from "../components/Form";
import Button from "../components/Button";

export default function GetInvolved() {
  const fields = [
    { name: "name", label: "Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "interest", label: "How would you like to help?", required: true },
  ];

  const handleSubmit = (values) => {
    alert("Volunteer submitted: " + JSON.stringify(values));
  };

  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Get Involved</h1>
      <Form fields={fields} onSubmit={handleSubmit} buttonText="Sign Up to Volunteer" />
      <div className="mt-8 bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-lg font-bold text-green-700 mb-2">Partner With Us</h2>
        <p className="text-gray-700 mb-4">
          Interested in partnering? Email us at <span className="font-semibold">partners@ngo.org</span>
        </p>
        <Button>Become a Partner</Button>
      </div>
    </div>
  );
}