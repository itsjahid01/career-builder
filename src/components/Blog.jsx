import React from "react";
import vector from "../assets/All Images/Vector.png";
import vector1 from "../assets/All Images/Vector-1.png";

const Blog = () => {
  return (
    <div className="">
      <div className="bg-[#F9F8FF] text-xl text-center font-bold flex justify-between items-center">
        <div className="">
          <img src={vector} alt="" />
        </div>
        <p className="text-2xl">Blogs</p>
        <div className="">
          <img src={vector1} alt="" />
        </div>
      </div>
      <div className="p-8 mx-auto">
        <p className="text-lg font-semibold">
          When should you use context API?
        </p>
        <p className="mb-4">
          <span className="text-xl text-green-700 font-semibold">Ans: </span>
          The Context API in React can be a useful tool in various scenarios.
          One such instance is when your application requires global
          configuration or settings that need to be accessed by multiple
          components. The Context API eliminates the need to pass props manually
          at every level of the component tree, making the data more accessible
          to all components. Another situation where the Context API can be
          useful is in managing theme and styling information across the
          application. By providing the theme and styling information via the
          Context API, you can easily change the color and styling of the entire
          application based on user preferences. Lastly, the Context API can be
          used to manage the user authentication and authorization state of the
          application. This can be helpful when multiple components require
          access to the user's authentication state, as it eliminates the need
          to pass props and makes the data more easily accessible. Overall, the
          Context API is a powerful tool that can simplify the sharing of data
          across components in a React application.
        </p>
        <p className="text-lg font-semibold">What is a custom hook?</p>
        <p className="mb-4">
          <span className="text-xl text-green-700 font-semibold">Ans: </span>A
          custom hook is a special JavaScript function whose name starts with
          'use' and can be used to call other hooks. Let's take a look at some
          major differences between a custom React JS hook and React JS
          components: A custom hook does not require a specific signature.
        </p>
        <p className="text-lg font-semibold">What is useRef?</p>
        <p className="mb-4">
          <span className="text-xl text-green-700 font-semibold ">Ans: </span>
          Ref means just reference, so it can be a reference to anything (DOM
          node, Javascript value, etc). The useRef hook returns a mutable object
          which doesn’t re-render the component when it’s changed. Think it like
          useState, but unlike useState, doesn’t trigger re-render of the
          component. The object that useRef returns have a current property that
          can hold any modifiable value.
        </p>
        <p className="text-lg font-semibold">
          When should you use context API?
        </p>
        <p className="mb-4">
          <span className="text-xl text-green-700 font-semibold">Ans: </span>
          useMemo is a React Hook that is used to optimize the performance of
          functional components by memoizing the result of a function call, and
          returning a cached value if the inputs to that function have not
          changed.
        </p>
      </div>
    </div>
  );
};

export default Blog;
