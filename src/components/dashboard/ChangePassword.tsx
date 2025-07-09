// src/components/dashboard/ChangePassword.tsx
import React from "react";

const ChangePassword: React.FC = () => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2">Change Password</h2>
      {/* Add your form fields */}
      <form>
        <label>
          Current Password:
          <input
            type="password"
            name="currentPassword"
            className="border p-2 rounded"
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            name="newPassword"
            className="border p-2 rounded"
          />
        </label>
        <label>
          Confirm New Password:
          <input
            type="password"
            name="confirmPassword"
            className="border p-2 rounded"
          />
        </label>
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Change Password
        </button>
      </form>
    </section>
  );
};

export default ChangePassword;
