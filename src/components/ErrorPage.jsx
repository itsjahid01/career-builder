import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error);
  const { status, data, statusText } = error;

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <p className="text-7xl font-bold  ">{status}</p>
        <p className="text-3xl font-semibold text-yellow-300">
          Page {statusText} !!
        </p>
        <p className="text-2xl text-red-600">{data}</p>
        <Link to={"/"}>
          <button className="mt-3 btn-primary font-semibold">
            Go To HomePage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
