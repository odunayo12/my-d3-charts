import * as d3 from "d3";

var svg = d3
  .select("#dendo_area")
  .append("svg")
  .attr("width", 600)
  .attr("height", 600)
  .append("g")
  .attr("transform", "translate(50, 50)");

var data = [
  { child: "John", parent: "", married: "Ann" },
  { child: "Aaron", parent: "Kevin", married: "" },
  { child: "Kevin", parent: "John", married: "" },
  { child: "Ann", parent: "John", married: "" },
  { child: "Mark", parent: "Ann", married: "" },
  { child: "Sarah", parent: "Kevin", married: "" },
  { child: "Isaac", parent: "Sarah", married: "" },
  { child: "Hannah", parent: "Ann", married: "" },
  { child: "Rose", parent: "Sarah", married: "" },
  { child: "zzosig 😉😁", parent: "Sarah", married: "" }
];

// takes id and parentId
var dataStructure = d3
  .stratify()
  .id((d) => d.child)
  .parentId((d) => d.parent)(data);

var treeStructure = d3.tree().size([500, 300]); //width and height

var information = treeStructure(dataStructure);

console.log(dataStructure);
console.log(information);

// console.log(information.descendants());
// console.log(information.links());

var circles = svg
  .append("g")
  .selectAll("circle")
  .data(information.descendants());

circles
  .enter()
  .append("circle")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .attr("r", 5);
console.log(information.links());
console.log(svg);
console.log(circles);
//to connect lines
//the g element is used to group svg elemnts together see: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g
var connections = svg.append("g").selectAll("path").data(information.links());

connections
  .enter()
  .append("path")
  .attr("d", (d) => {
    return (
      "M" +
      d.source.x +
      "," +
      d.source.y +
      " C " +
      d.source.x +
      "," +
      (d.source.y + d.target.y) / 2 +
      " " +
      d.target.x +
      "," +
      (d.source.y + d.target.y) / 2 +
      " " +
      d.target.x +
      "," +
      d.target.y
    );
  });

var names = svg.append("g").selectAll("text").data(information.descendants());
names
  .enter()
  .append("text")
  .text((d) => d.data.child)
  .attr("x", (d) => d.x + 7)
  .attr("y", (d) => d.y + 4);
// var adjline = d3.line()

// var lines = svg.append('g').selectAll('path').data(information.links());
// console.log(lines);
// lines.enter().append('g','path').attr('d', d => {return line([d.source, d.target]})
// svg.line().x(d => d.y).y(d => d.x);
