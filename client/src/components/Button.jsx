import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}