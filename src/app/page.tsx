"use client";

import React, { useState } from "react";
import { Dashboard } from "@/components/Dashboard/Dashboard";
import { InputPage } from "@/components/InputPage/InputPage";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleProcess = async (location: string) => {
    setLoading(true); // Start loading animation

    // Simulate fetching weather data + sending to ML model
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating API call delay

    setLoading(false);
    setShowDashboard(true); // Show dashboard after processing
  };

  return (
    <main className="p-4">
      {!showDashboard ? (
        <InputPage onProcess={handleProcess} loading={loading} />
      ) : (
        <Dashboard />
      )}
    </main>
  );
}
