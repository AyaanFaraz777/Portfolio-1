let canvas;

function setup(){
    canvas = createCanvas(1000,1000);
    canvas.parent("c");
}

function draw(){
    background("#326480");
    fill("#D67B6F")
  rect(447,0,50,1000)
  rect(630,0,50,1000)
  rect(0,500,1000,50)
  rect(0,325,1000,50)
  fill("#3F6256")
  rect(395,0,10,1000)
  rect(725,0,10,1000)
  rect(0,420,1000,20)
}