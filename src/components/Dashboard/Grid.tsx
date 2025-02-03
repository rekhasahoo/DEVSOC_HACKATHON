import React from "react";
import { StatCards } from "./StatCards";
import { ActivityGraph } from "./ActivityGraph";
import { EnergyPieChart } from "./EnergyPieChart";
import { StatCard } from "./StatCard";

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <EnergyPieChart></EnergyPieChart>
      <ActivityGraph />
      <StatCard></StatCard>
      <ActivityGraph />
      {/* <UsageRadar /> */}
      {/* <RecentTransactions /> */}
    </div>
  );
};
