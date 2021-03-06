var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];
var colors = [];
var numberDots;

function setup() {
  createCanvas(300+random(100), 300+random(100));
  numberDots = 70 + random(30);

  for (var index = 0; index < numberDots; index = index + 1) {
    x[index] = width / 2;
    y[index] = height / 2;
    xSpeed[index] = random(-5, 5);
    ySpeed[index] = random(-5, 5);
    colors[index] = color(random(255), random(255), random(255))
  }
}

function draw() {
  background(0);
  noStroke();

  for (var index = 0; index < numberDots; index = index + 1) {
    fill(colors[index]);
    ellipse(x[index], y[index], 10);
    x[index] = x[index] + xSpeed[index];
    y[index] = y[index] + ySpeed[index];

    if (x[index] > width || x[index] < 0 ) {
      xSpeed[index] = -xSpeed[index];
    }

    if (y[index] > height || y[index] < 0) {
      ySpeed[index] = -ySpeed[index];
    }
  }
}
