let img;

function preload() {
  img = loadImage('thing.jpg'); // load media and other data
}

function setup() { // only executed once preload is has finished loading data
  createCanvas(400, 400);

}

function draw() { // only executed once preload is has finished loading data
  image(img, 0, 0, width, height);
  noLoop(); // stop draw from looping (to show img has been loaded)
}