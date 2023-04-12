import React, { useState } from "react";
import SingleJob from "./SingleJob";

const FeaturedJobs = (props) => {
  // console.log(props);
  const jobs = props.jobs;
  // console.log(jobs);
  const [allJobs, setAllJobs] = useState(false);

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
        {allJobs
          ? jobs.map((job) => <SingleJob key={job.id} job={job}></SingleJob>)
          : jobs
              .slice(0, 4)
              .map((job) => <SingleJob key={job.id} job={job}></SingleJob>)}
        {/* {jobs.slice(0, 4).map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))} */}
      </div>
      <div className="mx-auto w-32">
        <button onClick={() => setAllJobs(true)} className="mt-5 btn-primary">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
