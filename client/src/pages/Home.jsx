import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
          >
            Empowering Communities for a Better Tomorrow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-700 mb-8"
          >
            Join us in making a difference. Volunteer, donate, or partner with us!
          </motion.p>
          <Button>Get Involved</Button>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          We strive to uplift underprivileged communities through education, healthcare, and sustainable development.
        </p>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h2>
        <p className="text-gray-700">
          A world where every individual has the opportunity to thrive.
        </p>
      </section>

      {/* Projects/Features Cards */}
      <section className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          image="/project1.jpg"
          title="Education for All"
          description="Providing quality education to children in need."
        />
        <Card
          image="/project2.jpg"
          title="Healthcare Initiatives"
          description="Ensuring access to basic healthcare services."
        />
        <Card
          image="/project3.jpg"
          title="Sustainable Development"
          description="Empowering communities with sustainable solutions."
        />
      </section>

      {/* Testimonials/Impact */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-4xl font-bold text-green-600">10,000+</span>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-blue-600">500+</span>
              <p className="text-gray-600">Volunteers</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-yellow-600">50+</span>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}