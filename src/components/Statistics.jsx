import React from "react";
import { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "A1",
      marks: 57,
    },
    {
      name: "A2",
      marks: 60,
    },
    {
      name: "A3",
      marks: 60,
    },
    {
      name: "A4",
      marks: 60,
    },
    {
      name: "A5",
      marks: 60,
    },
    {
      name: "A6",
      marks: 58,
    },
    {
      name: "A7",
      marks: 60,
    },
    {
      name: "A8",
      marks: 60,
    },
  ];
  return (
    <div>
      <div className="bg-[#F9F8FF] text-lg text-center font-bold p-7 ">
        <p>Statistics</p>
      </div>
      <div className="p-8">
        <AreaChart
          className="mx-auto"
          width={700}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="marks" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="marks"
            stroke="#a5d500"
            fill="#160C35"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
