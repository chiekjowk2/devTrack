"use client";
import React, { useState } from "react";



function HandleEntry({ onClose }) {
  const modalRef = React.useRef();

  return (
    // Overlay (clicking this closes the modal)
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose} // click anywhere on overlay closes modal
    >
      {/* Stop propagation so clicks inside modal don’t close it */}
      <div
        ref={modalRef}
        className="bg-gray-800 p-6 rounded-lg w-96 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-white text-lg mb-4">Add New Entry</h1>
        <div className="flex flex-col gap-3">
          <label className="text-gray-300">Title</label>
          <input
            type="text"
            placeholder="Entry Title"
            className="p-2 rounded outline-none"
          />
          <label className="text-gray-300">Task</label>
          <textarea
            placeholder="Describe your task..."
            className="p-2 rounded outline-none"
          />
          <button className="bg-green-500 p-2 rounded mt-2 cursor-pointer">
            Submit
          </button>
          <button
            className="bg-red-500 p-2 rounded mt-2 cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [showEntry, setShowEntry] = useState(false);

  return (
    <div className="bg-[#11121E] h-20 flex items-center justify-end px-4 relative">
      <button
        className="bg-purple-500 p-2 rounded cursor-pointer"
        onClick={() => setShowEntry(true)}
      >
        Add Entry
      </button>

      {showEntry && <HandleEntry onClose={() => setShowEntry(false)} />}
    </div>
  );
}
