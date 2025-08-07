function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Appbar */}
      <div className="bg-white border-b border-gray-200 py-4 px-6 flex items-center">
        <div className="flex items-center">
          {/* appbar icon {baby} */}
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg
              className="w-5 h-5 text-blue-600"
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
          {/* appbar app name and subtext */}
          <div>
            <h1 className="font-semibold text-gray-900">Development Tracker</h1>
            <p className="text-xs text-gray-500">
              Track your baby's development
            </p>
          </div>
        </div>
      </div>
      <div className="flex-grow px-6 py-8">
        {/*The header section*/}
        <div className="mb-10 flex flex-col items-center">
          <div className="bg-blue-100 rounded-full p-10 mb-3">
            <svg
              className="w-5 h-5 text-blue-600"
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
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome back
          </h1>
          <p className="text-gray-600">
            Track your baby's milestone with confidence
          </p>
        </div>
        {/*Sign in form section*/}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Sign in</h2>
          {/*phone number input section */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <span className="text-gray-500 mr-2">+880</span>
              <input
                type="tel"
                id="phone"
                placeholder="1XXX-XXXXXX"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
          {/*password input section */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your passowrd"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          {/* sign in button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium hover:opacity-85 cursor-pointer transition-all duration-300">
            Sign In
          </button>
        </div>
        {/* forgot passowrd link section */}
        <div className="text-center mb-8">
          <a
            href="#"
            className="text-blue-500 text-sm font-medium hover:underline"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-3">New to our App?</p>
          <button className="w-full rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-500 hover:text-white transition-all duration-200 py-3 cursor-pointer">
            Create Account
          </button>
        </div>
        {/* feature section{footer} */}
        <div className="mt-auto">
          <div className="flex space-y-4 text-center text-sm text-gray-500 items-between justify-between">
            <div className="flex flex-col items-center">
              <div className="bg-blue-200 rounded-full p-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="blue"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              Secure & Private
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-200 rounded-full p-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="green"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              Expert Approved
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-200 rounded-full p-2">
                <svg
                  className="w-4 h-4 "
                  fill="none"
                  stroke="purple"
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
              Family Friendly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
