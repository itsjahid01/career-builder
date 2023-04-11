import React from "react";
import lIcon from "../assets/Icons/Location Icon.png";
import mIcon from "../assets/Icons/Frame.png";

const Job = (props) => {
  const {
    id,
    companyLogo,
    companyName,
    jobTitle,
    salary,
    remoteOrOnsite,
    location,
    jobType,
  } = props.job;
  return (
    <div className="border p-5 border-gray-300 rounded-lg shadow-md">
      <img className="w-40 mb-4" src={companyLogo} alt="" />
      <p className="text-lg font-bold mb-2">{jobTitle}</p>
      <p className="font-semibold mb-2">{companyName}</p>
      <div className="flex gap-3 mb-2">
        <div className="px-2 py-1  rounded  border border-blue-400 text-blue-500">
          {remoteOrOnsite}
        </div>
        <div className="px-2 py-1 rounded border border-blue-400 text-blue-500">
          {jobType}
        </div>
      </div>
      <div className="flex gap-4 mb-3">
        <div>
          <img className="inline mr-1" src={lIcon} alt="" />
          <span>{location}</span>
        </div>
        <div>
          <img src={mIcon} alt="" className="inline mr-1s" />
          <span>Salary: {salary}</span>
        </div>
      </div>
      <button className="btn-primary">View Details</button>
    </div>
  );
};

export default Job;
