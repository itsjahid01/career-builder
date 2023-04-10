import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="">
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
