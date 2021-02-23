import { arc, pie, select } from "d3";
import React, { Fragment, useEffect, useRef } from "react";

function GaugeCircle({ data1 }) {
  const data = [data1.score, 100 - data1.score];
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const arcGenerator = arc().innerRadius(25).outerRadius(40);
    const pieGenerator = pie();
    const instruction = pieGenerator(data);
    // console.log(pieGenerator(data));

    svg
      .selectAll(".slice")
      .data(instruction)
      .join("path")
      .attr("class", "slice")
      .attr("stroke", "black")
      .style("transform", `translate(50%, 50%)`)
      .attr("fill", (instruction, index) => (index === 0 ? "#007bff" : "white"))
      .attr("d", (instruction) => arcGenerator(instruction));
  });

  return (
    <Fragment>
      <svg ref={svgRef} className="gauge">
      <text x="50%" y="10%" dominantBaseline="middle" textAnchor="middle">
          {data1.name}
        </text>  
        <text x="50%" y="48%" dominantBaseline="middle" textAnchor="middle">
          {data1.score}%
        </text>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle">
          {data1.vsly? data1.vsly : "N/A"}
        </text>
        <text x="50%" y="95%" dominantBaseline="middle" textAnchor="middle">
          Sample: {data1.sample}
        </text>
      </svg>
    </Fragment>
  );
}

export default GaugeCircle;
