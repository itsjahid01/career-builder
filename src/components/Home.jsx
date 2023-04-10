import React, { useEffect, useState } from "react";

import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const [category, setCategory] = useState([]);
  // console.log(data);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
