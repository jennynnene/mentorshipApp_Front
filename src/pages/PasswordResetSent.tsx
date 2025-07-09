import React from "react";

const PasswordResetSent: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow-md bg-white">
      <h2 className="text-3xl text-center font-bold mb-4 bg-blue-600 text-white p-3 rounded">
        Check Your Email
      </h2>

      <p className="text-center text-gray-700">
        If an account with that email exists, a password reset link has been
        sent. Please check your inbox.
      </p>
    </div>
  );
};

export default PasswordResetSent;
