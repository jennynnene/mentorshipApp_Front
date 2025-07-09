// src/components/dashboard/ManagePreferences.tsx
import React from "react";

const ManagePreferences: React.FC = () => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Manage Preferences</h2>
      {/* Your preferences form */}
      <form>
        <label>
          Receive Newsletter:
          <input type="checkbox" name="newsletter" />
        </label>
        {/* Add other preferences */}
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Preferences
        </button>
      </form>
    </section>
  );
};

export default ManagePreferences;
