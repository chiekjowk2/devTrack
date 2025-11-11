"use client";
import React, { useState } from "react";

function EditProfileModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

        <div className="flex flex-col gap-3">
          <label className="text-sm text-gray-400">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="p-2 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="p-2 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <label className="text-sm text-gray-400">Bio</label>
          <textarea
            placeholder="Tell us about yourself..."
            className="p-2 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition cursor-pointer"
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded bg-green-500 hover:opacity-90 transition cursor-pointer">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#141626] to-[#1c1e33] px-4">
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl w-full max-w-sm text-center text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent opacity-30 blur-2xl -z-10"></div>

        {/* Profile Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
            alt="User Avatar"
            className="w-28 h-28 rounded-full mx-auto border-4 border-purple-500 shadow-lg object-cover"
          />
          <span className="absolute bottom-2 right-[42%] w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full"></span>
        </div>

        {/* Info */}
        <h2 className="text-2xl font-semibold mt-4 tracking-wide">
          Miles Johnson
        </h2>
        <p className="text-gray-400 text-sm mb-3">@miles.dev</p>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          Passionate software engineer crafting modern web apps with React,
          Tailwind, and creativity.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setShowEdit(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 rounded-lg text-sm font-medium shadow-md hover:opacity-90 transition cursor-pointer"
          >
            Edit Profile
          </button>
          <button className="bg-gray-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition cursor-pointer">
            Logout
          </button>
        </div>
      </div>

      {showEdit && <EditProfileModal onClose={() => setShowEdit(false)} />}
    </div>
  );
}
