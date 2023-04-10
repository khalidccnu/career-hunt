import React from "react";
import Breadcrumb from "../component/Breadcrumb.jsx";

const Blog = () => {
  return (
    <>
      <Breadcrumb title={"Blog"} />
      <section className="py-20">
        <div className="container">
          <div className="max-w-lg mx-auto space-y-3">
            <div className="collapse border border-sky-900 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
                <h5 className="w-11/12">When should you use Context API?</h5>
              </div>
              <div className="collapse-content">
                <p className="pl-24 pr-10 py-10 text-base">
                  The Context API is the React feature used for solving props
                  drilling problems. So, it provides a way to pass data through
                  the component tree without having to pass props down manually
                  at every level. That's reason, Context API should be used.
                </p>
              </div>
            </div>
            <div className="collapse border border-sky-900 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
                <h5 className="w-11/12">What is a custom hook?</h5>
              </div>
              <div className="collapse-content">
                <p className="pl-24 pr-10 py-10 text-base">
                  A custom hook is a special JavaScript function whose name
                  starts with 'use' and can be used to call other hooks. When we
                  have component logic that needs to be used by multiple
                  components, then we can extract that logic to a custom Hook.
                </p>
              </div>
            </div>
            <div className="collapse border border-sky-900 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
                <h5 className="w-11/12">What is useRef?</h5>
              </div>
              <div className="collapse-content">
                <p className="pl-24 pr-10 py-10 text-base">
                  The useRef Hook allows to persist values between renders. It
                  can be used to store a mutable value that does not cause a
                  re-render when updated. It can be used to access a DOM element
                  directly.
                </p>
              </div>
            </div>
            <div className="collapse border border-sky-900 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
                <h5 className="w-11/12">What is useMemo?</h5>
              </div>
              <div className="collapse-content">
                <p className="pl-24 pr-10 py-10 text-base">
                  React has a built-in hook called useMemo that allows to
                  memoize expensive functions so that we can avoid calling them
                  on every render. It caches the result of a calculation between
                  re-renders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
