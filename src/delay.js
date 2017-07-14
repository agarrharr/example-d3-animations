var height = 300;
var width = 1500;
var barWidth = 20;
var barSpacing = 10;

var svg = d3.select('#delay')
  .append('svg')
  .attr({
    height: height,
    width: width
  });

var data1 = [10, 12, 15, 2, 17, 20];
var data2 = [10, 12, 15, 2, 17, 20, 10, 12, 15, 2, 17, 20, 10, 12, 15, 2, 17, 20, 10, 12, 15, 2, 17, 20, 10, 12, 15, 2, 17, 20, 10, 12, 15, 2, 17, 20];

function draw() {
  var dataSet = Number(document.getElementById('dataSet').value);
  var typeOfDelay = Number(document.getElementById('typeOfDelay').value);
  var delay = Number(document.getElementById('delayAmount').value);

  var data = dataSet ? data2 : data1;

  svg.selectAll('rect').remove();

  var selection = svg.selectAll('rect')
    .data(data);

  selection.enter()
    .append('rect')
    .attr({
      x: function(d, i) {
        return i * (barWidth + barSpacing);
      },
      y: height,
      height: 0,
      width: barWidth
    })
    .style({
      fill: '#5A75ED'
    });

  selection
    .transition()
    .delay(function(d, i) {
      if (typeOfDelay) {
        return (delay / data.length) * i;
      }
      return delay * i;
    })
    .attr({
      y: function(d) {
        return height - d * 10;
      },
      height: function(d) {
        return d * 10;
      }
    });
}
