import React, { useState } from "react";

function CreateAccountStep1() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.confirmPassword.trim() !== "";

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 py-8">
      {/* Header section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
        <p className="text-sm mt-1 text-gray-500">Step 1 of 3</p>
      </div>
      {/* Title section  */}
      <div className="mb-8 flex flex-col items-center">
        {/* profile icon */}
        <div className="bg-blue-100 p-3 rounded-full mb-3">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        {/* parent information title  */}
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Parent Information
        </h2>
        <p className="text-gray-600 text-sm">
          Let's start with your information
        </p>
      </div>
      {/* input form */}
      <div className="space-y-5">
        {/* name input  */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none text-gray-700 placeholder-gray-400 text-sm"
          />
        </div>
        {/* phone number input */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Phone number
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2.5 bg-white">
            <span className="text-gray-700 mr-1">+880</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="1XXX-XXXXXX"
              className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
            />
          </div>
        </div>
        {/* create passowrd input */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Create Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 6 characters"
            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none text-gray-700 placeholder-gray400 text-sm"
          />
        </div>
        {/* confirm passowrd input */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none text-gray-700 placeholder-gray-400 text-sm"
          />
        </div>
      </div>
      {/* continue button */}
      <div className="mt-10">
        <button
          className={`w-full py-3 rounded-md font-medium text-sm flex items-center justify-center ${
            isFormValid
              ? "opacity-100 cursor-pointer hover:opacity-85"
              : "opacity-20"
          } bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300`}
          disabled={!isFormValid}
        >
          Continue
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default CreateAccountStep1;
