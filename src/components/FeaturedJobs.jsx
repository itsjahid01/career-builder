import React from "react";
import lIcon from "../assets/Icons/Location Icon.png";
import mIcon from "../assets/Icons/Frame.png";

const FeaturedJobs = (props) => {
  console.log(props.job);
  const {
    id,
    companyLogo,
    companyName,
    jobTitle,
    salary,
    remoteOrOnsite,
    location,
    fulltimeOrPartTime,
  } = props?.job;
  return (
    <div className="border p-5 border-gray-300 rounded-lg">
      <img className="w-40" src={companyLogo} alt="" />
      <p>{jobTitle}</p>
      <p>{companyName}</p>
      <div className="flex">
        <div>{remoteOrOnsite}</div>
        <div>{fulltimeOrPartTime}</div>
      </div>
      <div className="flex">
        <div>
          <img src={lIcon} alt="" />
          <span>{location}</span>
        </div>
        <div>
          <img src={mIcon} alt="" /> <span>{salary}</span>
        </div>
      </div>
      <button className="btn-primary">View Details</button>
    </div>
  );
};

export default FeaturedJobs;
