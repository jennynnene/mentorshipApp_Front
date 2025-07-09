// src/pages/LandingPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <section className="bg-white min-h-screen text-gray-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-600">Mentorship</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Connect mentees and mentors in a collaborative, supportive
          environment. Grow, learn, and lead together.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold px-6 py-3 rounded"
          >
            Learn More
          </Link>
        </div>

        {/* Optional: Feature highlights */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
            <p>Connect with experienced mentors across various fields.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p>Track goals and growth with your personalized dashboard.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p>Your data is safe with our secure, privacy-first approach.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
