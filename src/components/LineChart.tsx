"use client";

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { LineChartData } from "@/utils/type";

interface LineChartProps {
  data: LineChartData[];
}

export default function LineChart({ data }: LineChartProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-colors">
      <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white ">
        Monthly Activity
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsLineChart data={data} >
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip contentStyle={{ backgroundColor: "var(--tw-bg-opacity)", borderColor: "#888",color: "#000",}}
          />
          <Legend wrapperStyle={{ color: "#888" }} />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
