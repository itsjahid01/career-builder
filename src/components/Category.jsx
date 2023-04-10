import React from "react";

const Category = (props) => {
  const { jobCategoryLogo, categoryName, availableJobs } = props.category;
  //   console.log(props);
  return (
    <div className="bg-[#FAF8FF] p-5 rounded">
      <div className="bg-[#EDEEFF] mb-3 p-3 w-20 rounded-md ">
        <img src={jobCategoryLogo} alt="" className="mx-auto" />
      </div>
      <p className="text-md font-bold">{categoryName}</p>
      <p>{availableJobs}</p>
    </div>
  );
};

export default Category;
