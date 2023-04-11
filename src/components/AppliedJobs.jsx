import React from "react";
import vector from "../assets/All Images/Vector.png";
import vector1 from "../assets/All Images/Vector-1.png";

const AppliedJobs = () => {
  return (
    <div>
      <div className="bg-[#F9F8FF] text-xl text-center font-bold flex justify-between items-center">
        <div className="">
          <img src={vector} alt="" />
        </div>
        <p className="text-2xl">Applied Jobs</p>
        <div className="">
          <img src={vector1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
