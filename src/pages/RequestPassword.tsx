import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ import navigate

const ForgotPasswordRequest: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ⬅️ initialize navigate

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3001/api/users/forgot-password/request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      // Regardless of response, redirect
      if (response.ok) {
        navigate("/password-reset-sent"); // ✅ redirect on success
      } else {
        const data = await response.json();
        setError(data.message || "Failed to send reset request.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Forgot password error:", err.message);
        setError("Please try again.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Forgot Password
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email" className="block mb-1 font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your email"
          required
          disabled={loading}
        />

        {error && <p className="text-red-600 mb-2">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordRequest;
