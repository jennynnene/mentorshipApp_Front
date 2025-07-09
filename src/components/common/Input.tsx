// src/components/common/Input.tsx
import React from "react";

interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default Input;
