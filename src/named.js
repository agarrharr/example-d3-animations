var height = 300;
var width = 700;
var radius = 50;
var positionTransitioned = false;
var colorTransitioned = false;
var strokeTransitioned = false;
var maxStroke = 10;

var svg = d3.select('#named')
  .append('svg')
  .attr({
    height: height,
    width: width
  });

var circle = svg.append('circle')
  .attr({
    r: radius,
    cx: radius + maxStroke,
    cy: height / 2
  })
  .style({
    fill: '#58F29B',
    stroke: '#333',
    'stroke-width': 1
  });

function transitionPosition() {
  var cx = width - radius - maxStroke;
  if (positionTransitioned) {
    cx = radius + maxStroke;
  }
  positionTransitioned = !positionTransitioned;
  circle.transition('position')
    .duration(2000)
    .attr({
      cx: cx
    });
}

function transitionColor() {
  var color = '#F25C58';
  if (colorTransitioned) {
    color = '#58F29B';
  }
  colorTransitioned = !colorTransitioned;
  circle.transition('color')
    .duration(2000)
    .style({
      fill: color
    });
}

function transitionStroke() {
  var width = maxStroke;
  if (strokeTransitioned) {
    width = 1;
  }
  strokeTransitioned = !strokeTransitioned;
  circle.transition('stroke')
    .duration(2000)
    .style({
      'stroke-width': width
    });
}
