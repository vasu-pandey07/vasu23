import React from "react";
import Form from "../components/Form";
import Button from "../components/Button";

export default function Donate() {
  const fields = [
    { name: "amount", label: "Donation Amount", type: "number", required: true },
    { name: "method", label: "Payment Method (placeholder)", required: true },
  ];

  const handleSubmit = (values) => {
    alert("Donation submitted: " + JSON.stringify(values));
  };

  return (
    <div className="max-w-md mx-auto py-16">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Donate</h1>
      <Form fields={fields} onSubmit={handleSubmit} buttonText="Donate Now" />
      <div className="mt-8 text-center">
        <Button className="w-full text-lg py-3">Big Donate CTA</Button>
      </div>
    </div>
  );
}