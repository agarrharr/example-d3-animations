var height = 300;
var width = 500;
var barWidth = 20;
var barSpacing = 10;
var usingFirstData = false;

var svg = d3.select('#bars')
  .append('svg')
  .attr({
    height: height,
    width: width
  });

var data1 = [10, 12, 15, 2, 17, 20];
var data2 = [1, 22, 5, 12, 5, 17];

draw();

function draw() {
  var data = data1;
  if (usingFirstData) {
    data = data2;
  }

  var selection = svg.selectAll('rect')
    .data(data);

  selection.enter()
    .append('rect')
    .style({
      fill: '#5A75ED'
    });

  selection.attr({
      x: function(d, i) {
        return i * (barWidth + barSpacing);
      },
      y: function(d) {
        return height - d * 10;
      },
      height: function(d) {
        return d * 10;
      },
      width: barWidth
    });

  usingFirstData = !usingFirstData;
}

function drawWithTransition() {
  var data = data1;
  if (usingFirstData) {
    data = data2;
  }

  var selection = svg.selectAll('rect')
    .data(data);

  selection.enter()
    .append('rect')
    .style({
      fill: '#5A75ED'
    });

  selection
    .transition()
    .attr({
      x: function(d, i) {
        return i * (barWidth + barSpacing);
      },
      y: function(d) {
        return height - d * 10;
      },
      height: function(d) {
        return d * 10;
      },
      width: barWidth
    });

  usingFirstData = !usingFirstData;
}
