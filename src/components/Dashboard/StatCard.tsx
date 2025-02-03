import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
export const StatCard = () => {
  const pillText = "10";
  const trend = parseFloat(pillText) > 0 ? "up" : "down";
  const value =
    parseFloat(pillText) > 0
      ? "Production is more than consumption"
      : "Production is less than consumption";
  const period =
    parseFloat(pillText) > 0
      ? "All the energy needs are being met by renewable resources, and some extra enery will be generated which can be stored for later use"
      : "Enery produced by renewable resources is not enough";
  return (
    <Card value={value} pillText={pillText} trend={trend} period={period} />
  );
};

const Card = ({
  value,
  pillText,
  trend,
  period,
}: {
  value: string;
  pillText: string;
  trend: "up" | "down";
  period: string;
}) => {
  return (
    <div className="col-span-4 p-4 rounded border border-stone-300">
      <div className="flex mb-8 items-start justify-between">
        <div>
          <p className="text-2xl font-semibold">{value}</p>
        </div>

        <span
          className={`text-s flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />} {pillText}
        </span>
      </div>

      <p className="text-lg text-stone-500">{period}</p>
    </div>
  );
};
