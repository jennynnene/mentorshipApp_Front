// src/pages/MenteeDashboard.tsx
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
}

const MenteeDashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch {
        setUser(null);
      }
    }
  }, []);

  const upcomingSessions = [
    { id: 1, mentor: "John Doe", date: "2025-07-12", time: "2:00 PM" },
    { id: 2, mentor: "Sarah Lee", date: "2025-07-18", time: "4:30 PM" },
  ];

  return (
    <section className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome{user?.firstName ? `, ${user.firstName}` : ", Mentee"}!
        </h1>

        {/* Progress Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Sessions Completed</h2>
            <p className="text-3xl text-blue-600 font-bold">5</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Goals Achieved</h2>
            <p className="text-3xl text-green-600 font-bold">3</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Next Session</h2>
            <p className="text-md">
              With <strong>{upcomingSessions[0].mentor}</strong>
            </p>
            <p className="text-md text-gray-500">
              {upcomingSessions[0].date} at {upcomingSessions[0].time}
            </p>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white p-6 rounded shadow mb-10">
          <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
          {upcomingSessions.map((session) => (
            <div
              key={session.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>With {session.mentor}</span>
              <span className="text-sm text-gray-600">
                {session.date} at {session.time}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            View Mentors
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Track Progress
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
            Update Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenteeDashboard;
