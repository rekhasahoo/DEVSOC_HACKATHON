"use client";

import React from "react";
import { FiSun } from "react-icons/fi";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const energyData = [
  { name: "Solar Energy", value: 500, color: "#fbbf24" }, // Yellow
  { name: "Wind Energy", value: 700, color: "#60a5fa" }, // Blue
  { name: "Total Consumption", value: 1000, color: "#ef4444" }, // Red
];

export const EnergyPieChart = () => {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiSun /> Energy Distribution
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={energyData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {energyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
