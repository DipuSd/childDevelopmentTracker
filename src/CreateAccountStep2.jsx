import React, { useState } from "react";

function CreateAccountStep2() {
  const [formData, setFormData] = useState({
    babyName: "",
    gender: "",
    birthDate: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photo: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const isFormValid =
    formData.babyName.trim() !== "" &&
    formData.gender.trim() !== "" &&
    formData.birthDate.trim() !== "";

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 py-8">
      {/* Header section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
        <p className="text-gray-500 text-sm mt-1">Step 2 of 3</p>
      </div>
      {/* title section with baby icon */}
      <div className="mb-8 flex flex-col items-center">
        {/* baby icon */}
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
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        {/* title under icon */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Baby Profile
          </h2>
          <p className="text-gray-600 text-sm">Tell us about your little one</p>
        </div>
      </div>
      {/* input form section */}
      <div className="space-y-5">
        {/* add photo section */}
        <div className="flex flex-col items-center mb-4">
          <label className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300">
              {formData.photo ? (
                <img
                  src={formData.photo}
                  alt="baby"
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>
          <span className="text-gray-600 text-sm mt-2">Add Photo</span>
        </div>
        {/* baby's name */}
        <label className="block text-sm text-gray-700 mb-1">Baby's Name</label>
        <input
          type="text"
          name="babyName"
          value={formData.babyName}
          onChange={handleChange}
          placeholder="Enter baby's name"
          className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none text-gray-700 placeholder-gray-400 text-sm"
        />
        {/* baby's gender */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none text-gray-700 text-sm bg-white"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Date of birth input */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none text-gray-700 text-sm"
          />
        </div>
      </div>
      {/* bottom navigation buttons */}
      <div className="mt-10 flex space-x-4">
        <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md font-medium text-sm cursor-pointer">
          Back
        </button>
        <button
          className={`flex-1 py-3 rounded-md font-medium text-sm flex items-center justify-center ${
            isFormValid
              ? "opacity-100 hover:opacity-85 cursor-pointer"
              : "opacity-20"
          } bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
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
export default CreateAccountStep2;
