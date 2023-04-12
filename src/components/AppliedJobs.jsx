import React, { useEffect, useState } from "react";
import vector from "../assets/All Images/Vector.png";
import vector1 from "../assets/All Images/Vector-1.png";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilities/fakedb";
import SingleApply from "./SingleApply";

const AppliedJobs = () => {
  const jobsData = useLoaderData();
  // console.log(jobsData);
  const [appliedJob, setAppliedJob] = useState([]);
  // console.log(appliedJob);
  useEffect(() => {
    let selected = [];
    const storedJob = getShoppingCart();
    // console.log(storedJob);
    for (const id in storedJob) {
      if (jobsData) {
        const selectedJob = jobsData.find((job) => job.id == id);
        selected.push(selectedJob);
      }
      // console.log(selectedJob);
      setAppliedJob(selected);
    }
  }, []);

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
      {appliedJob.map((job) => (
        <SingleApply key={job.id} job={job}></SingleApply>
      ))}
    </div>
  );
};

export default AppliedJobs;
