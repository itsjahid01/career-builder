import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-[#F9F8FF] text-lg text-center font-bold p-7 ">
        <p>Blogs</p>
      </div>
      <div>
        <p className="text-lg font-semibold">
          When should you use context API?
        </p>
        <p className="mb-4">
          <span className="text-xl text-green-700 font-semibold">Ans:</span>
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
        <p>
          <span className="text-xl text-green-700 font-semibold">Ans:</span>A
          custom hook is a special JavaScript function whose name starts with
          'use' and can be used to call other hooks. Let's take a look at some
          major differences between a custom React JS hook and React JS
          components: A custom hook does not require a specific signature.
        </p>
        <p className="text-lg font-semibold">What is useRef?</p>
        <p>
          <span className="text-xl text-green-700 font-semibold ">Ans:</span>
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
        <p className="text-lg font-semibold">
          When should you use context API?
        </p>
        <p>
          <span className="text-xl text-green-700 font-semibold">Ans:</span>
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
      </div>
    </div>
  );
};

export default Blog;
