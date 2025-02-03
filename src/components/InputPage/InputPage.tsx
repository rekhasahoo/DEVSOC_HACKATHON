import React, { useState } from "react";

export const InputPage = ({
  onProcess,
  loading,
}: {
  onProcess: (location: string) => void;
  loading: boolean;
}) => {
  const [location, setLocation] = useState("");

  return (
    <div className="h-screen flex flex-col justify-center max-w-sm mx-auto">
      <label
        htmlFor="location-input"
        className="block mb-2 text-lg font-medium text-gray-900 "
      >
        Enter Location
      </label>
      <input
        type="text"
        id="location-input"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter state name..."
      />
      <button
        onClick={() => onProcess(location)}
        disabled={loading || !location}
        className="mt-3 px-4 py-2 bg-blue-600 text-lg text-white font-medium rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Processing..." : "Submit"}
      </button>

      {/* Loading animation */}
      {loading && (
        <p className="mt-2 text-lg text-blue-600">
          Fetching data & processing...
        </p>
      )}
    </div>
  );
};
