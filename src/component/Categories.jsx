import React, { useContext } from "react";
import { LoaderContext } from "../route/Root.jsx";
import Category from "./Category.jsx";

const Categories = () => {
  const [categories] = useContext(LoaderContext);

  return (
    <section className="py-10">
      <div className="container">
        <div>
          <div className="text-center space-y-2 mb-10">
            <h3 className="font-semibold text-2xl">Job Category List</h3>
            <p className="text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
