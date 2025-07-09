// src/pages/LoginForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import ErrorMessage from "../components/common/ErrorMessage";
import { loginUser } from "../auth/Login.auth";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  role: string;
  exp: number;
  [key: string]: unknown; // include other possible fields
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    const result = await loginUser(formData.email, formData.password);

    if (!result.token) {
      setError(result.message || "Login failed. Please try again.");
      return;
    }

    try {
      // Store token
      localStorage.setItem("authToken", result.token);

      // Store user info (from response)
      if (result.user) {
        localStorage.setItem("user", JSON.stringify(result.user));
      }

      // Decode token
      const decoded: DecodedToken = jwtDecode(result.token);

      // Redirect based on role
      if (decoded.role === "mentee") {
        navigate("/mentee-dashboard");
      } else if (decoded.role === "mentor") {
        navigate("/mentor-dashboard");
      } else {
        setError("Unauthorized role.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Login error:", err.message);
        setError("Login failed. Please try again.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <ErrorMessage message={error || ""} />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-blue-600">
          <a href="/password-reset" className="hover:underline">
            Forgot Password?
          </a>
          <a href="/signup" className="hover:underline">
            Create Account
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
