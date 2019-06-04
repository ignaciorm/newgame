var canvassize = 500;
var square;
var centerw = canvassize/2;
var centerh = canvassize/2;

function setup() {
  createCanvas(500,500);
  background(70);
  square = new Square();
}

function draw() {

  //ellipse(centerw, centerh, 80, 80);
  square.show();
}
