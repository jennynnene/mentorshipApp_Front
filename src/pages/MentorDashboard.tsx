// src/pages/MentorDashboard.tsx
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
}

const MentorDashboard: React.FC = () => {
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
    { id: 1, mentee: "Alice Johnson", date: "2025-07-10", time: "11:00 AM" },
    { id: 2, mentee: "Michael Smith", date: "2025-07-13", time: "3:30 PM" },
  ];

  const totalMentees = 4;
  const completedSessions = 12;

  return (
    <section className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome{user?.firstName ? `, ${user.firstName}` : ", Mentor"}!
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Total Mentees</h2>
            <p className="text-3xl text-blue-600 font-bold">{totalMentees}</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Sessions Completed</h2>
            <p className="text-3xl text-green-600 font-bold">
              {completedSessions}
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Next Session</h2>
            <p className="text-md">
              With <strong>{upcomingSessions[0].mentee}</strong>
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
              <span>With {session.mentee}</span>
              <span className="text-sm text-gray-600">
                {session.date} at {session.time}
              </span>
            </div>
          ))}
        </div>

        {/* Mentor Actions */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            View Mentees
          </button>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">
            Schedule Session
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
            Update Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorDashboard;
