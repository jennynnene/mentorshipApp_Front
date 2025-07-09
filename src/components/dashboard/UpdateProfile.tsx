// src/components/dashboard/UpdateProfile.tsx
import React from "react";

const UpdateProfile: React.FC = () => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2">Update Personal Info</h2>
      {/* Add your form fields here */}
      <form>
        <label>
          Name:
          <input type="text" name="name" className="border p-2 rounded" />
        </label>
        {/* Add other fields like email, phone etc. */}
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default UpdateProfile;
