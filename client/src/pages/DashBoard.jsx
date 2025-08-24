import React from "react";

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <span className="text-4xl font-bold text-green-600">120</span>
          <p className="text-gray-600">Tickets</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <span className="text-4xl font-bold text-blue-600">75</span>
          <p className="text-gray-600">Queries</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <span className="text-4xl font-bold text-yellow-600">$5,000</span>
          <p className="text-gray-600">Donations</p>
        </div>
      </div>
    </div>
  );
}