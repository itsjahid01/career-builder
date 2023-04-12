import React, { useEffect, useState } from "react";
import vector from "../assets/All Images/Vector.png";
import vector1 from "../assets/All Images/Vector-1.png";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";

const JobDetails = () => {
  const { jobId } = useParams();
  //   console.log(dynamic.jobId);
  const data = useLoaderData();
  //   console.log(data);
  const [details, setDetails] = useState({});
  //   console.log(details);

  useEffect(() => {
    if (data) {
      const singleData = data.find((singleData) => singleData.id == jobId);
      setDetails(singleData);
    }
  }, []);

  return (
    <div>
      <div className="bg-[#F9F8FF] text-xl text-center font-bold flex justify-between items-center">
        <div className="">
          <img src={vector} alt="" />
        </div>
        <p className="text-2xl">Job Details</p>
        <div className="">
          <img src={vector1} alt="" />
        </div>
      </div>
      <Details details={details}></Details>
    </div>
  );
};

export default JobDetails;
