import * as d3 from "d3";
import * as d3Render from "d3-render";

const circleComponent = ({
  r,
  cx,
  cy,
  fill,
  randomDelay = Math.random() * 300
}) => {
  return {
    append: "circle",
    r,
    cx,
    cy,
    fill,
    duration: 1000
    //delay: randomDelay
  };
};
var render = d3Render.default;
var height = 400;
var width = 700;
var colours = {
  pink: "#D8352A",
  red: "#D8352A",
  blue: "#48509E",
  green: "#02A371",
  yellow: "#F5A623",
  hyperGreen: "#19C992",
  purple: "#B1B4DA",
  orange: "#F6E7AD",
  charcoal: "#383838"
};
const svg = d3
  .select("#circle-parker-div")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const data = [
  circleComponent({
    append: "circle",
    r: 90,
    cx: 90,
    cy: 90,
    fill: colours.red
  })
];

render(svg, data);
