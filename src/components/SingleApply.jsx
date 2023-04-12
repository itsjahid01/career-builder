import React from "react";
import mIcon from "../assets/Icons/Frame.png";
import lIcon from "../assets/Icons/Location Icon.png";
import { Link } from "react-router-dom";

const SingleApply = (props) => {
  //   console.log(props);
  const {
    id,
    companyLogo,
    companyName,
    jobType,
    location,
    remoteOrOnsite,
    salary,
    jobTitle,
  } = props.job;
  return (
    <div className=" flex items-center gap-5 border border-gray-300 p-2 rounded">
      <div className="w-44 bg-[#F4F4F4] px-8 py-8 rounded">
        <img src={companyLogo} alt="" />
      </div>
      <div className="flex grow justify-between items-center">
        <div className="">
          <p className="text-lg font-semibold mb-2">{jobTitle}</p>
          <p className="mb-2">{companyName}</p>
          <div className="flex gap-3 items-center mb-3 ">
            <p className="px-3 py-1 border border-blue-500 text-blue-500 rounded">
              {remoteOrOnsite}
            </p>
            <p className="px-3 py-1 border border-blue-500 text-blue-500 rounded">
              {jobType}
            </p>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="flex items-center gap-2 ">
              <img src={lIcon} alt="" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 ">
              <img src={mIcon} alt="" />
              <span>{salary}</span>
            </div>
          </div>
        </div>
        <Link to={`/jobDetails/${id}`}>
          <button className="btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleApply;
