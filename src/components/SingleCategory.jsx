import React from "react";

const SingleCategory = (props) => {
  //   console.log(props);
  const { jobCategoryLogo, categoryName, availableJobs } = props.category;
  return (
    <div className="bg-[#FAF8FF] p-5 rounded-md shadow-md">
      <div className="bg-[#EDEEFF] mb-3 p-3 w-20 rounded-md ">
        <img src={jobCategoryLogo} alt="" className="mx-auto" />
      </div>
      <p className="text-md font-bold">{categoryName}</p>
      <p>{availableJobs}</p>
    </div>
  );
};

export default SingleCategory;
