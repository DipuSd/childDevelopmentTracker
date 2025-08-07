import React, { useState } from "react";

function CreateAccountStep3() {
  const [formData, setFormData] = useState({
    city: "",
    language: "Bengali",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = formData.city.trim() !== "";

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 py-8">
      {/* header section */}
      <div className="mb-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
        <p className="text-gray-500 text-sm mt-1">Step 3 of 3</p>
      </div>
      {/* section title with confetti icon */}
      <div className="mb-8 flex flex-col items-center">
        {/* confetti icon */}
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        {/* centerd title */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Complete Setup
          </h2>
          <p className="text-gray-600 text-sm">Almost Done!</p>
          <p className="text-gray-600 text-sm">Just a few more details</p>
        </div>
      </div>
      {/* form field section */}
      <div className="space-y-5 mb-8">
        {/* city selector */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            City/Location
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none text-gray-700 text-sm bg-white"
          >
            <option value="">Select your city</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Barishal">Barishal</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Preferred language input */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Preffered Language
          </label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none text-gray-700 text-sm bg-white"
          >
            <option value="Bengali">Bengali</option>
            <option value="English">English</option>
          </select>
        </div>
        {/* whats next section */}
        <div className="flex justify-center">
          <div className="w-fit mb-8 border border-blue-300 bg-blue-100 rounded-md mx-auto p-2">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 ">
              What's next?
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Track daily milestones for your baby</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Get personalized development insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Receive timely alerts and reminders</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Access expert-approved resources</span>
              </li>
            </ul>
          </div>
        </div>
        {/* bottom navigation button */}
        <div className="mt-auto flex space-x-4">
          <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md font-medium text-sm cursor-pointer">
            Back
          </button>
          <button
            className={`flex-1 bg-blue-600 text-white py-3 rounded-md font-medium text-sm bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center ${
              isFormValid
                ? "opacity-100 hover:opacity-85 cursor-pointer"
                : "opacity-20"
            }`}
            disabled={!isFormValid}
          >
            Create Account
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
    </div>
  );
}
export default CreateAccountStep3;
