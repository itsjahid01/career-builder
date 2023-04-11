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
import vector from "../assets/All Images/Vector.png";
import vector1 from "../assets/All Images/Vector-1.png";

const Statistics = () => {
  const data = [
    {
      name: "Assignment 1",
      marks: 57,
    },
    {
      name: "Assignment 2",
      marks: 60,
    },
    {
      name: "Assignment 3",
      marks: 60,
    },
    {
      name: "Assignment 4",
      marks: 60,
    },
    {
      name: "Assignment 5",
      marks: 60,
    },
    {
      name: "Assignment 6",
      marks: 58,
    },
    {
      name: "Assignment 7",
      marks: 60,
    },
    {
      name: "Assignment 8",
      marks: 60,
    },
  ];
  return (
    <div>
      <div className="bg-[#F9F8FF] text-xl text-center font-bold flex justify-between items-center">
        <div className="">
          <img src={vector} alt="" />
        </div>
        <p className="text-2xl">Statistics</p>
        <div className="">
          <img src={vector1} alt="" />
        </div>
      </div>
      <div className="p-8">
        <AreaChart
          className="mx-auto"
          width={950}
          height={400}
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
