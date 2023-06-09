import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { UilInfoCircle } from "../component/Unicons.jsx";
import Breadcrumb from "../component/Breadcrumb.jsx";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={5} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >
        {payload.key + " " + value}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {(percent * 100).toFixed(2) + "%"}
      </text>
    </g>
  );
};

const Statistic = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const assignmentData = [
    { key: "A1", name: "New Year New Me", value: 60 },
    { key: "A2", name: "G3 Architects", value: 58 },
    { key: "A3", name: "Justice", value: 60 },
    { key: "A4", name: "N/A", value: 60 },
    { key: "A5", name: "Geometry Genius", value: 60 },
    { key: "A6", name: "AI Universe Hub", value: 60 },
    { key: "A7", name: "Quiz Hero", value: 60 },
    { key: "A8", name: "Knowledge Cafe", value: 60 },
  ];

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <>
      <Breadcrumb title={"Assignment Marks"} />
      <section className="py-5">
        <div className="container">
          <div className="text-end">
            <label
              htmlFor="statistic"
              className="btn btn-sm btn-gradient border-0 rounded"
            >
              <UilInfoCircle className="w-4 fill-white" />
            </label>
          </div>
          <div className="w-fit mx-auto">
            <PieChart width={400} height={400}>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={assignmentData}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
              />
            </PieChart>
          </div>
        </div>
      </section>
      <div>
        <input type="checkbox" id="statistic" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative w-auto">
            <label
              htmlFor="statistic"
              className="btn btn-sm btn-circle btn-gradient border-0 absolute right-2 top-2"
            >
              ✕
            </label>
            <ul className="list-disc list-inside mt-5">
              <li>A1 &#8614; Assignment 1</li>
              <li>A2 &#8614; Assignment 2</li>
              <li>A3 &#8614; Assignment 3</li>
              <li>A4 &#8614; Assignment 4</li>
              <li>A5 &#8614; Assignment 5</li>
              <li>A6 &#8614; Assignment 6</li>
              <li>A7 &#8614; Assignment 7</li>
              <li>A8 &#8614; Assignment 8</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
