import { area, axisBottom, curveCardinal, line, scaleLinear, select } from "d3";
import React, { Fragment, useEffect, useRef } from "react";

function LineChart({ data, name }) {
  const svgRef = useRef();
  let tickLabels = data.map((d) => d.date);
  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([20, 320]);

    const yScale = scaleLinear().domain([0, 200]).range([200, 0]);

    const createArea = area()
      .x((d, index) => xScale(index))
      .y0(200)
      .y1(yScale)
      .curve(curveCardinal);
    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((d, i) => tickLabels[i]);

    svg.select(".x-axis").call(xAxis);

    const myLine = line()
      .x((d, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    svg
      .attr("height", "300px")
      .attr("width", "400px")
      .selectAll(".line")
      .data([data.map((d) => d.score)])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "black")
      .style("stroke-width", "2px");

    svg
      .selectAll(".newArea")
      .data([data.map((d) => d.score)])
      .join("path")
      .attr("class", "newArea")
      .attr("d", createArea)
      .attr("fill", "#007bff");
    svg
      .selectAll(".dots")
      .data(data.map((d) => d.score))
      .join("circle")
      .attr("class", "dots")
      .attr("cx", (d, i) => xScale(i))
      .attr("cy", yScale)
      .attr("r", 3)
      .attr("fill", "red");

    svg
      .selectAll(".gio")
      .data(data.map((d) => d.score))
      .join("text")
      .attr("class", "gio")
      .attr("x", (d, i) => xScale(i))
      .attr("y", yScale)
      .style("transform", "translateY(-10px)")
      .style("font-family", "Roboto")
      .style("font-size", "15px")
      .style("font-weight", "bold")
      .text((d) => `${d}%`);
  });

  return (
    <Fragment>
      <h3 className="mt-4">{name} Trend</h3>
      <button type="button" className="btn btn-primary active btn-sm mr-1">
        Day
      </button>
      <button type="button" className="btn btn-primary active btn-sm mr-1">
        Month
      </button>
      <button type="button" className="btn btn-primary active btn-sm mr-1">
        Quarter
      </button>
      <button type="button" className="btn btn-primary active btn-sm mr-1">
        half
      </button>
      <button type="button" className="btn btn-primary active btn-sm">
        Year
      </button>

      <div className="content mt-3">
        <svg ref={svgRef} className="chart">
          <g className="x-axis"></g>
        </svg>
      </div>
    </Fragment>
  );
}

export default LineChart;
