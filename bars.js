var height = 300;
var width = 500;

var svg = d3.select('#bars')
  .append('svg')
  .attr({
    height: height,
    width: width
  });

var data1 = [10, 12, 15, 2, 17, 20];
var data2 = [1, 22, 5, 12, 5, 17];

draw(data1);

setTimeout(function() {
  draw(data2);
}, 1000);

function draw(data) {
  var selection = svg.selectAll('rect')
    .data(data);

  selection.enter()
    .append('rect');

  selection.attr({
      x: function(d, i) {
        return i * 15;
      },
      y: function(d) {
        return height - d * 10;
      },
      height: function(d) {
        return d * 10;
      },
      width: 10
    });
}

function drawWithTransition(data) {
  var selection = svg.selectAll('rect')
    .data(data);

  selection.enter()
    .append('rect');

  selection
    .transition()
    .attr({
      x: function(d, i) {
        return i * 15;
      },
      y: function(d) {
        return height - d * 10;
      },
      height: function(d) {
        return d * 10;
      },
      width: 10
    });
}
