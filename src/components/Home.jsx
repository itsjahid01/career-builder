import React, { useEffect, useState } from "react";

import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  const jobs = useLoaderData();
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
      <Category categorys={categorys}></Category>

      {/* featured job section  */}
      <FeaturedJobs jobs={jobs}></FeaturedJobs>
    </div>
  );
};

export default Home;
