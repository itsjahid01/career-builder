import React from "react";
import Job from "./Job";

const FeaturedJobs = (props) => {
  //   console.log(props.job.fulltimeOrPartTime);

  return (
    <div className=" mt-8 mb-5">
      <div className="text-center p-8">
        <p className="text-2xl font-bold mb-3 ">Featured Jobs</p>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 p-5">
        {props.jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
