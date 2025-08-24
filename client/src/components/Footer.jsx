import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white shadow mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src="/logo.png" alt="NGO Logo" className="h-8 w-8 rounded-full" />
          <span className="font-bold text-lg text-blue-600">NGO Name</span>
        </div>
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link to="/projects" className="text-gray-600 hover:text-blue-600">Projects</Link>
          <Link to="/donate" className="text-gray-600 hover:text-blue-600">Donate</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm py-2">
        © {new Date().getFullYear()} NGO Name. All rights reserved.
      </div>
    </footer>
  );
}