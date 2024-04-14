let canvas;

function setup(){
    canvas = createCanvas(1000,1000);
    canvas.parent("c");
}

function draw(){
background("white")
noStroke()
fill("red")
rect(375,0,50,1000)
rect(575,0,50,1000)
rect(0,475,1000,50)
rect(0,325,1000,50)
rect(0,625,1000,50)
fill("cyan")
rect(295,0,10,1000)
rect(695,0,10,1000)
rect(0,445,1000,10)
rect(0,545,1000,10)
}
