"use client";

import { useState } from "react";

export default function Search() {
  const [inputTouched, setInputTouched] = useState(false);

  const handleInputTouch = () => setInputTouched(true);

  return (
    <div className="flex justify-between gap-2">
      <input
        type="text"
        placeholder="Search or Create a room"
        className="rounded-full grow p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onInput={handleInputTouch}
      />
      {inputTouched && (
        <button
          type="submit"
          className="bg-gray-500 border border-gray-500 rounded-full py-3 px-5 font-bold transform shadow-md transition duration-200 hover:scale-105 hover:bg-gray-600 animate-in fade-in zoom-in"
        >
          Create Room
        </button>
      )}
    </div>
  );
}
