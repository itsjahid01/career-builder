import React, { useEffect, useState } from "react";
import vector from "../assets/All Images/Vector.png";
import vector1 from "../assets/All Images/Vector-1.png";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilities/fakedb";
import SingleApply from "./SingleApply";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const AppliedJobs = () => {
  const jobsData = useLoaderData();
  // console.log(jobsData);
  const [appliedJob, setAppliedJob] = useState([]);
  // console.log(appliedJob);
  useEffect(() => {
    const storedJob = getShoppingCart();
    let selected = [];
    // console.log(storedJob);
    for (const id in storedJob) {
      if (jobsData) {
        const selectedJob = jobsData.find((job) => job.id == id);
        selected.push(selectedJob);
      }
      // console.log(selectedJob);
    }
    setAppliedJob(selected);
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
      <div className="w-32 ml-auto mt-7 mr-4">
        <div className="dropdown ">
          <label
            tabIndex={0}
            className="bg-[#F4F4F4] px-4 py-2 rounded font-semibold m-1 flex items-center"
          >
            Filter By <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Remote</a>
            </li>
            <li>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" grid grid-cols-1 gap-5 p-8">
        {appliedJob.map((job) => (
          <SingleApply key={job.id} job={job}></SingleApply>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
