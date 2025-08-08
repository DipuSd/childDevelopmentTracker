import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import CompletedMilestone from "./Components/Milestones";
import Milestones from "./Components/Milestones";

function Homepage() {
  // 4 type task category, motor, cognitive, social and language
  // icon will change based on the task category
  // completed can be empty incase of incompleted task
  const recentTask = [
    {
      taskCompleted: true,
      title: "Sits without support",
      subtitle: "can sit up independently for several seconds",
      ageRange: "4-7 months",
      completed: "Completed 11/28/2024",
      taskCategory: "motor",
    },
    {
      taskCompleted: true,
      title: "Responds to name",
      subtitle: "Turns head when name is called",
      ageRange: "4-6 months",
      completed: "Completed 11/25/2024",
      taskCategory: "social",
    },
    {
      taskCompleted: false,
      title: "Babbles with consonants",
      subtitle: 'makes sounds like "ba", "da", "ga"',
      ageRange: "4-6 months",
      taskCategory: "language",
    },
    {
      taskCompleted: true,
      title: "Interest in new objects ",
      subtitle: "shows curiosity and turn their gaze towards new objects",
      ageRange: "1-3 months",
      completed: "Completed 11/25/2024",
      taskCategory: "cognitive",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with profile and notifications */}
      <div className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden mr-3">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">Aminul</h1>
            <p className="text-xs text-gray-500">14 months 0 weeks old</p>
          </div>
        </div>
        {/* notification button */}
        <div className="flex items-center">
          <button className="relative mr-4">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
          {/* track button */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-3 rounded-md shadow-md flex items-center cursor-pointer hover:opacity-85">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Track
          </button>
        </div>
      </div>
      {/* main section */}
      <main className="p-4 space-y-4">
        {/* milestone and development part */}
        <section className="flex justify-between space-x-3">
          {/* milestone box */}
          <div className="flex-1 rounded-lg p-4 items-center border border-blue-200 bg-blue-100">
            <div className="flex items-start flex justify-between mr-2">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="lightblue"
                stroke="red"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer target ring */}
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Inner target ring */}
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Arrow shaft */}
                <line
                  x1="19"
                  y1="5"
                  x2="12"
                  y2="12"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Arrowhead */}
                <polyline
                  points="19,5 17,5 17,7"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="rounded-lg p-1 bg-blue-200">
                <p>28/45</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold">Milestones</h2>
            <p className="text-sm text-blue-500">completed</p>
          </div>
          {/* Delvlopment box*/}
          <div className="flex-1 items-center rounded-lg p-4  border border-green-300 bg-green-200">
            <div className="flex items-start flex justify-between mr-2">
              <svg
                className="w-6 h-6 text-gray-600 mb-2"
                fill="none"
                stroke="green"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Y axis */}
                <line
                  x1="3"
                  y1="3"
                  x2="3"
                  y2="21"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* X axis */}
                <line
                  x1="3"
                  y1="21"
                  x2="21"
                  y2="21"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Bars */}
                <rect
                  x="6.5"
                  y="13"
                  width="3"
                  height="8"
                  rx="0.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="11"
                  y="8"
                  width="3"
                  height="13"
                  rx="0.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="15.5"
                  y="4"
                  width="3"
                  height="17"
                  rx="0.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="bg-green-300 rounded-md px-1">
                <p className="font-semibold text-gray-600">On Track</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold">Development</h2>
            <p className="text-sm text-green-500">status</p>
          </div>
        </section>
        {/* Development progress section */}
        <section className="bg-white border border-gray-300 rounded-xl flex flex-col items-start w-full p-4 shadow-sm">
          <div className="flex space-x-2 mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Diagonal arrow */}
              <line
                x1="5"
                y1="19"
                x2="19"
                y2="5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Arrowhead */}
              <polyline
                points="13 5 19 5 19 11"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-gray-500 font-semibold">
              Development Progress
            </h2>
          </div>
          <div className="w-full">
            {/* motor progress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex">
                  <img
                    src="/runningMan.png"
                    alt="running man"
                    className="h-6"
                  />
                  <h2 className=" font-semibold pl-1">Motor</h2>
                </div>
                <h3 className="text-gray-600 font-medium">8/12</h3>
              </div>
              {/* make sure custom label has empty space */}
              <ProgressBar completed={80} customLabel=" " />
            </div>
            {/* cognitive progress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex">
                  <img src="/brain.png" alt="brain" className="h-6" />
                  <h2 className="font-semibold pl-1">Cognitive</h2>
                </div>
                <h3 className="text-gray-600 font-medium">6/10</h3>
              </div>
              <ProgressBar completed={70} customLabel=" " />
            </div>
            {/* social progress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex">
                  <img src="/social.png" alt="social" className="h-6" />
                  <h2 className="font-semibold pl-1">Social</h2>
                </div>
                <h3 className="text-gray-600 font-medium ">9/11</h3>
              </div>
              <ProgressBar completed={90} customLabel=" " />
            </div>
            {/* language progress */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <div className="flex">
                  <img src="/speech.png" alt="speech buble" className="h-6" />
                  <h2 className="font-semibold pl-1">Language</h2>
                </div>
                <h3 className="text-gray-600 font-medium">5/9</h3>
              </div>
              <ProgressBar completed={45} customLabel=" " />
            </div>
          </div>
        </section>
        {/* Recent milestone section */}
        <section className="bg-white border border-gray-300 shadow-sm rounded-xl flex flex-col items-start w-full p-4">
          {/* title and view all button */}
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="purple"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <h2 className="pl-1 text-gray-600 font-semibold">
                Recent Milestones
              </h2>
            </div>
            <button
              onClick="#"
              className="py-2 px-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white cursor-pointer rounded-xl shadow-sm hover:opacity-85"
            >
              View All
            </button>
          </div>
          {/* recently completed milestone holder */}
          <div className="flex flex-col w-full space-y-3">
            {/* iteratively making required amount of component */}
            {recentTask.map((task) => (
              <Milestones props={task} />
            ))}
          </div>
        </section>
        {/* Milestone check section */}
        <section className="w-full border border-orange-200 bg-orange-100 rounded-lg px-2 py-6 shadow-sm">
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F97316" // Tailwind's orange-500
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex flex-col pl-2">
              <h2 className="font-semibold">Milestone Check</h2>
              <p className="text-sm text-gray-600">
                Some 5-month milestones are pending. Consider consulting your
                pediatrician if concerns persist
              </p>
              <button className="p-1 border border-orange-200 w-30 rounded-xl bg-gray-100 cursor-pointer hover:bg-orange-400 mt-2 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/*bottom button section  */}
        <section className="flex items-center justify-center space-x-4">
          <button
            onClick="#"
            className=" hover:opacity-85 cursor-pointer flex-1 border border-gray-300 bg-gradient-to-r from-blue-500 to-purple-500 py-2 rounded-lg text-white flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Track Today
          </button>
          <button
            onClick="#"
            className=" hover:opacity-85 cursor-pointer flex-1 border border-gray-300 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white p-2 flex flex-col items-center"
          >
            <img src="/babyIcon.png" alt="baby" className="h-6 w-6" />
            Baby's Profile
          </button>
        </section>
      </main>
    </div>
  );
}
export default Homepage;
