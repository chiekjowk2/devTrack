"use client";

export default function Homepage() {
  return (
    <div className="flex min-h-screen ] text-white bg-gradient-to-br from-[#0f0f1a] via-[#141626] to-[#1c1e33]">
      {/* Main Content Area */}
      <div className="flex-1 px-4 py-6 md:px-8 overflow-y-auto ">
        <h1 className="text-2xl font-semibold mb-6">Logs</h1>
        {/* Example Logs Section */}
        <div className="space-y-4">
          <div className="bg-[#2b2b3b] p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium">Day 1: Authentication Setup</h2>
            <p className="text-gray-300 text-sm mt-2">
              Worked on JWT authentication with Node.js and Express.
            </p>
          </div>

          <div className="bg-[#2b2b3b] p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium">Day 2: Database Integration</h2>
            <p className="text-gray-300 text-sm mt-2">
              Connected MongoDB and created models for user data.
            </p>
          </div>

          <div className="bg-[#2b2b3b] p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium">Day 3: API Testing</h2>
            <p className="text-gray-300 text-sm mt-2">
              Used Postman to test all CRUD routes for logs.
            </p>
          </div>
          <div className="bg-[#2b2b3b] p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium">Day 3: API Testing</h2>
            <p className="text-gray-300 text-sm mt-2">
              learnt spring boot .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
