// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Mentorship
        </h1>

        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          Mentorship is a platform designed to connect mentees with experienced
          mentors in various fields — education, tech, business, and more. We
          believe in building a community where knowledge, support, and guidance
          are freely shared.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Why Mentorship Matters
            </h2>
            <p className="text-gray-700 mb-4">
              Mentorship can accelerate personal and professional growth.
              Whether you're a student seeking guidance or a professional
              looking to give back, a strong mentor-mentee relationship can make
              a lasting impact.
            </p>
            <p className="text-gray-700">
              Our platform makes it easy to connect, schedule sessions, and
              track progress in a secure and user-friendly environment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Sign up as a mentor or mentee</li>
              <li>Complete your profile and preferences</li>
              <li>Browse and connect with matches</li>
              <li>Schedule mentorship sessions</li>
              <li>Track goals and feedback over time</li>
            </ul>
          </div>
        </div>

        {/* Optional: Mission Statement */}
        <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Our Mission
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            We’re committed to making mentorship accessible to everyone,
            everywhere. We aim to empower people by fostering meaningful
            relationships that help them grow, learn, and thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
