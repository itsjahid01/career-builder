import React from "react";
import mIcon from "../assets/Icons/Frame.png";
import lIcon from "../assets/Icons/Location Icon.png";

const SingleApply = (props) => {
  //   console.log(props);
  const {
    companyLogo,
    companyName,
    jobType,
    location,
    remoteOrOnsite,
    salary,
    jobTitle,
  } = props.job;
  return (
    <div className="flex  items-center border border-gray-300">
      <div className="bg-[#F4F4F4] p-2">
        <img src={companyLogo} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>{jobTitle}</p>
          <p>{companyName}</p>
          <div>
            <p>{remoteOrOnsite}</p>
            <p>{jobType}</p>
          </div>
          <div>
            <div>
              <img src={lIcon} alt="" />
              <span>{location}</span>
            </div>
            <div>
              <img src={mIcon} alt="" />
              <span>{salary}</span>
            </div>
          </div>
        </div>
        <button className="btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default SingleApply;
