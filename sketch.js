var fireList = [];
const gravity = -1;
const friction = 0.9;
const num = 60;

function setup() {
  createCanvas(clientWidth, clientHeight);
  colorMode(HSB, 255);
  background(32);
  noStroke();
}

function draw() {
  background(32, 30);
  for (let fir of fireList){
    fir.actualize();
  }
  if(fireList.length == 0){
	  background(32);
  }
}


function ponder(a, b, c, d){
  return a/b*(d-c);
}
