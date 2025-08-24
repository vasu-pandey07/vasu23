import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

export default function Login() {
  const fields = [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Password", type: "password", required: true },
  ];

  const handleSubmit = (values) => {
    alert("Login submitted: " + JSON.stringify(values));
  };

  return (
    <div className="max-w-md mx-auto py-16">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Login</h1>
      <Form fields={fields} onSubmit={handleSubmit} buttonText="Login" />
      <div className="mt-4 text-center">
        <span className="text-gray-600">Don't have an account?</span>
        <Link to="/signup" className="text-blue-600 ml-2 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
}