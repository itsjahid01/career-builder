import React, { useEffect, useState } from "react";

import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const Home = () => {
  const data = useLoaderData();
  const [categorys, setCategorys] = useState([]);
  // console.log(categorys);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  return (
    <div>
      <Banner></Banner>

      {/* job category section  */}
      <div className="text-center p-8">
        <p className="text-2xl font-bold mb-3 ">Job Category List</p>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 mx-14">
        {categorys.map((category) => (
          <Category key={category.categoryName} category={category}></Category>
        ))}
      </div>
      {/* featured job section  */}
      <div className="text-center p-8">
        <p className="text-2xl font-bold mb-3 ">Featured Jobs</p>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>{}</div>
    </div>
  );
};

export default Home;
