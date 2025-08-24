import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

export default function Signup() {
  const fields = [
    { name: "name", label: "Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Password", type: "password", required: true },
  ];

  const handleSubmit = (values) => {
    alert("Signup submitted: " + JSON.stringify(values));
  };

  return (
    <div className="max-w-md mx-auto py-16">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Sign Up</h1>
      <Form fields={fields} onSubmit={handleSubmit} buttonText="Sign Up" />
      <div className="mt-4 text-center">
        <span className="text-gray-600">Already have an account?</span>
        <Link to="/login" className="text-blue-600 ml-2 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}