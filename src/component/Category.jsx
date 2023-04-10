import React from "react";

const Category = ({ category }) => {
  return (
    <div className="bg-[linear-gradient(90deg,_rgba(126,_144,_254,_0.05)_0%,_rgba(152,_115,_255,_0.05)_100%)] p-7 rounded">
      <div className="bg-[linear-gradient(90deg,_rgba(126,_144,_254,_0.10)_0%,_rgba(152,_115,_255,_0.10)_100%)] w-fit p-3 rounded">
        <img src={category.logo} alt="" className="w-5" />
      </div>
      <h5 className="mt-5 mb-1 font-semibold">{category.name}</h5>
      <span className="text-gray-500">
        {category.jobs_available} Jobs Available
      </span>
    </div>
  );
};

export default Category;
