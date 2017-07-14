var width = 1000;
var height = 500;
var radius = 40;

var svg = d3.select('#balls')
  .append('svg')
  .attr({
    height: height,
    width: width
  });

var data = [];

setInterval(function() {
  addBall();
}, 250);

function addBall() {
  var colors = ['#F25C58', '#58F29B', '#5A75ED', '#63B28B', '#898CCA'];
  var newData = Math.random() * width;
  data.push(newData);

  var selection = svg.selectAll('circle')
    .data(data, function(d) {
      return d;
    });

  selection.enter()
    .append('circle')
    .attr({
      r: radius,
      cx: function(d) {
        return d;
      },
      cy: function(d) {
        return 0;
      }
    })
    .style({
      fill: function() {
        return colors[Math.floor(Math.random() * colors.length)];
      }
    })
    .transition()
    .duration(1000)
    .ease('bounce')
    .attr({
      cy: function(d) {
        return height - radius;
      },
      cx: function(d) {
        return d;
      }
    })
    .each('end', function() {
      var transition = selection.transition()
        .attr({
          cx: function(d) {
            return d;
          },
          cy: function(d) {
            return height - radius;
          }
        });
    });


  if(data.length > 100) {
    data.shift();
  }

  selection.exit()
    .remove();
}
