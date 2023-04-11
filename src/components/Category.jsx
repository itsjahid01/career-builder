import React from "react";
import SingleCategory from "./SingleCategory";

const Category = (props) => {
  // console.log(props.categorys);
  return (
    <div>
      <div className="text-center p-8">
        <p className="text-2xl font-bold mb-3 ">Job Category List</p>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 mx-14">
        {props.categorys.map((category) => (
          <SingleCategory
            key={category.id}
            category={category}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Category;
