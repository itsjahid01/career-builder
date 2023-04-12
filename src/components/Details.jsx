import React from "react";
import pIcon from "../assets/Icons/Frame-2.png";
import jIcon from "../assets/Icons/Frame-1.png";
import masIcon from "../assets/Icons/Frame-3.png";
import mIcon from "../assets/Icons/Frame.png";
import lIcon from "../assets/Icons/Location Icon.png";
import { addToDb } from "../utilities/fakedb";

const Details = (props) => {
  //   console.log(props);
  const {
    id,
    salary,
    location,
    jobTitle,
    jobResponsibility,
    jobDescription,
    experiences,
    educationalRequirements,
    contactInformation,
  } = props.details;

  const handleApplyNow = (id) => {
    // console.log(id);
    addToDb(id);
  };

  return (
    <div className="flex justify-evenly p-8 gap-10 ">
      <div className="w-3/5 p-8">
        <p className="mb-3">
          <span className="font-semibold">Job Description: </span>
          <br />
          {jobDescription}
        </p>
        <p className="mb-3">
          <span className="font-semibold">Job Responsibility: </span>
          <br />
          {jobResponsibility}
        </p>
        <p className="mb-3">
          <span className="font-semibold">Educational Requirements:</span>
          <br />
          {educationalRequirements}
        </p>
        <p>
          <span className="font-semibold">Experiences: </span>
          <br />
          {experiences}
        </p>
      </div>

      <div className="w-2/5  ">
        <div className="bg-[#F4F2FF] mb-5 p-8 rounded-md">
          <p className="text-xl font-bold mb-2">Job Details</p>
          <hr />
          <div className="flex gap-2 mt-3 mb-2">
            <img src={mIcon} alt="" />
            <p>
              <span className="font-semibold">Salary: </span> {salary}
            </p>
          </div>
          <div className="flex gap-2 mb-4">
            <img src={jIcon} alt="" />
            <p>
              <span className="font-semibold">Job Title: </span>
              {jobTitle}
            </p>
          </div>
          <p className="text-xl font-bold mb-3">Contact Information</p>
          <hr />
          <div className="flex gap-2 mt-3 mb-2">
            <img src={pIcon} alt="" />
            <p>
              <span className="font-semibold">Phone: </span>
              {contactInformation?.phone}
            </p>
          </div>
          <div className="flex gap-2 mb-2">
            <img src={masIcon} alt="" />
            <p>
              <span className="font-semibold">Email: </span>
              {contactInformation?.email}
            </p>
          </div>
          <div className="flex gap-2 ">
            <img src={lIcon} alt="" />
            <p>
              <span className="font-semibold">Address: </span>
              {location}
            </p>
          </div>
        </div>
        <button
          onClick={() => handleApplyNow(id)}
          className="w-full btn-primary"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Details;
