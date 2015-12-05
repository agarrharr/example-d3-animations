var radius = 45;
var padding = 15;
var height = (radius * 2 * 3) + (padding * 4);
var width = (radius + padding) * 2;
var data = [0];

var svg = d3.select('#stopLight')
  .append('svg')
  .attr({
  height: height,
  width: width
  });

svg.append('rect')
  .attr({
  x: 0,
  y: 0,
  height: height,
  width: width
  })
  .style({
  'fill-opacity': 0,
  'stroke-width': '1px',
  stroke: '#333333'
  });

update(data);

function update(data) {
  var selection = svg.selectAll('circle')
    .data(data);

  selection.enter()
    .append('circle')
    .attr({
      r: radius,
    })
    .style({
      fill: function(d) {
        return ['red', 'yellow', 'green'][d];
      }
    });

  selection
    .transition()
    .attr({
      cx: radius + padding,
      cy: function(d) {
        return (radius * (d * 2 + 1)) + (padding * (d + 1));
      }
    })
    .style({
      fill: function(d) {
        return ['red', 'yellow', 'green'][d];
      }
    });
}
